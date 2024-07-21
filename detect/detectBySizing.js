const threshold = 170;
const checkDevTools = () => {
  const devToolsOpen =
    globalThis.outerWidth - globalThis.innerWidth > threshold ||
    globalThis.outerHeight - globalThis.innerHeight > threshold ||
    (globalThis.Firebug?.chrome?.isInitialized);

  const isDeveloperToolsOpen = devToolsOpen;
  if (globalThis.isDeveloperToolsOpen !== isDeveloperToolsOpen) {
    globalThis.isDeveloperToolsOpen = isDeveloperToolsOpen;
    globalThis.dispatchEvent(new CustomEvent('devtoolschange', { detail: { isDeveloperToolsOpen } }));
  }
};

globalThis.isDeveloperToolsOpen = false;
setInterval(checkDevTools, 200);

export default checkDevTools;
