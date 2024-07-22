const threshold = 170;
setTimeout(() => {
  const devToolsOpen =
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold ||
    window.Firebug?.chrome?.isInitialized;

  if (devToolsOpen) {
    document.dispatchEvent(new CustomEvent("isDeveloperToolsOpen", { detail: true }));
  }
}, 100);
