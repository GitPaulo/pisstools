/**
 * Spam the console with a table to fill the console height and width
 */
import ConsoleSpamWorker from './workers/consoleSpam.worker.js';
import NetworkSpamWorker from './workers/networkSpam.worker.js';
new ConsoleSpamWorker();
new NetworkSpamWorker();

/**
 *  Start detection methods
 */
document.addEventListener("isDeveloperToolsOpen", (event) => {
  spamWorker.postMessage({
    devtoolsHeight: Math.abs(window.innerHeight - window.outerHeight),
    devtoolsWidth: Math.abs(window.innerWidth - window.outerWidth)
  });
  if (event.detail) {
    alert("🛑 Stop using developer tools!");
    setTimeout(() => window.location.reload(), 500);
  }
});
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
  if (
    (e.ctrlKey && e.shiftKey && keysToDisable.includes(e.key)) ||
    e.key === "F12"
  ) {
    e.preventDefault();
  }
});

/**
 * Disable copy paste
 */
document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("paste", (e) => e.preventDefault());
document.addEventListener("cut", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());

/**
 * Aggressive debugger injection
 */
(function r() {
  requestAnimationFrame(r);
  debugger;
})();
