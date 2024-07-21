const checkDevTools = () => {
  const isDevToolsOpen = () => {
    let devtoolsOpen = false;
    if (globalThis.Firebug?.chrome?.isInitialized) {
      devtoolsOpen = true;
    } else {
      const r = /./;
      r.toString = function () {
        devtoolsOpen = true;
        return '';
      };
      console.log('%c', r);
    }
    return devtoolsOpen;
  };

  const isDeveloperToolsOpen = isDevToolsOpen();
  if (globalThis.isDeveloperToolsOpen !== isDeveloperToolsOpen) {
    globalThis.isDeveloperToolsOpen = isDeveloperToolsOpen;
    globalThis.dispatchEvent(new CustomEvent('devtoolschange', { detail: { isDeveloperToolsOpen } }));
  }
};

globalThis.isDeveloperToolsOpen = false;
setInterval(checkDevTools, 1000);

export default checkDevTools;
