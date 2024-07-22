const threshold = 170;
function checkDevToolsBySizing() {
  const devToolsOpen =
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold ||
    window.Firebug?.chrome?.isInitialized;

  if (devToolsOpen) {
    document.dispatchEvent(new CustomEvent("developerToolsOpened"));
  }
}

setInterval(checkDevToolsBySizing, 1000);
