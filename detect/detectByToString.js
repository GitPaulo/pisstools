function checkDevToolsByToString() {
  const element = new Image();
  Object.defineProperty(element, "id", {
    get: function () {
      document.dispatchEvent(new CustomEvent("developerToolsOpened"));
    },
  });

  console.log("%c", element);
}

setInterval(checkDevToolsByToString, 250);
