function checkDevToolsByDebugger() {
  const start = performance.now();
  debugger;
  if (performance.now() - start > 100) {
    document.dispatchEvent(new CustomEvent("developerToolsOpened"));
  }
}

setInterval(checkDevToolsByDebugger, 500);
