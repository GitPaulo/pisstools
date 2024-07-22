setTimeout(() => {
  const start = performance.now();
  debugger;
  if (performance.now() - start > 100) {
    document.dispatchEvent(
      new CustomEvent("isDeveloperToolsOpen", { detail: true })
    );
  }
}, 250);
