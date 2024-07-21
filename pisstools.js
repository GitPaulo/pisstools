/**
 *  Start detection methods
 */
import "./detect/detectBySizing";
// import "./detect/detectByString";

window.addEventListener(
  "devtoolschange",
  ({ detail }) => detail?.isDeveloperToolsOpen && window.alert("✋ No developer tools!")
);

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
 * Spam the console with a table to fill the console height
 */
(() => {
  const spamLine = "===N=O==D=E=V=E=L=O=P=E=R==T=O=O=L=S===";
  const calculateHeight = () => {
    const devtoolsHeight = window.innerHeight - window.outerHeight;
    return Math.abs(devtoolsHeight);
  };
  const generateSpamData = (rows, columns) => {
    const spamData = [];
    for (let i = 0; i < rows; i++) {
      const row = {};
      for (let j = 0; j < columns; j++) {
        row[j] = spamLine;
      }
      spamData.push(row);
    }
    return spamData;
  };
  setInterval(() => {
    const devtoolsHeight = calculateHeight();
    const rows = Math.max(50, Math.floor(devtoolsHeight / 20));
    const columns = 20;
    const spamData = generateSpamData(rows, columns);
    console.table(spamData);
  }, 1000);
})();

/**
 * Aggressive debugger injection
 */
(() => {
  setInterval(() => {
    (function () {
      debugger;
    })();
  }, 100);
})();
