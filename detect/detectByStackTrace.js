function checkDevToolsByStackTrace() {
  try {
    throw new Error("Check Stack Trace");
  } catch (e) {
    const stack = e.stack.toLowerCase();
    if (stack.includes("debugger") || stack.includes("console")) {
      document.dispatchEvent(new CustomEvent("developerToolsOpened"));
    }
  }
}

setInterval(checkDevToolsByStackTrace, 250);
