setTimeout(() => {
  const element = new Image();
  Object.defineProperty(element, "id", {
    get: function () {
      document.dispatchEvent(
        new CustomEvent("isDeveloperToolsOpen", { detail: true })
      );
    },
  });

  console.log("%c", element);
}, 250);
