/**
 * Spam the console with a table to fill the console height and width
 */
import ConsoleSpamWorker from "./workers/consoleSpam.worker.js";
import NetworkSpamWorker from "./workers/networkSpam.worker.js";

new ConsoleSpamWorker();
new NetworkSpamWorker();

/**
 * Fight back once the developer tools are opened
 */
document.addEventListener("developerToolsOpened", () => {
  window.alert("🛑 Stop using developer tools!");
  if (typeof spamWorker !== "undefined" && spamWorker.postMessage) {
    spamWorker.postMessage({
      devtoolsHeight: Math.abs(window.innerHeight - window.outerHeight),
      devtoolsWidth: Math.abs(window.innerWidth - window.outerWidth),
    });
  }
  document.addEventListener("keydown", function (e) {
    if (
      (e.ctrlKey || e.metaKey) &&
      e.shiftKey &&
      (e.key === "]" || e.key === "[")
    ) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });
  document.addEventListener("copy", (e) => e.preventDefault());
  document.addEventListener("paste", (e) => e.preventDefault());
  document.addEventListener("cut", (e) => e.preventDefault());
  document.addEventListener("selectstart", (e) => e.preventDefault());
  debugger;
  setTimeout(() => window.location.reload(), 500);
});

/**
 *  Start detection methods
 */
import "./detect/detectBySizing";
import "./detect/detectByToString";
import "./detect/detectByDebugger";
import "./detect/detectByStackTrace";

/**
 * Disable common ways to open tools
 */
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  const keysToDisable = ["F12", "I", "J", "C", "U"];
  const key = e.key || e.keyCode;
  if (
    (e.ctrlKey && e.shiftKey && keysToDisable.includes(key.toUpperCase())) ||
    (e.metaKey && e.altKey && keysToDisable.includes(key.toUpperCase())) ||
    key === "F12"
  ) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
});

/**
 * Aggressive debugger injection
 */
(function r() {
  if (typeof requestAnimationFrame !== "undefined") {
    requestAnimationFrame(r);
  } else {
    setTimeout(r, 0);
  }
  debugger;
})();
