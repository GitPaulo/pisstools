// networkSpam.js
{
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const sendRequest = (url, options) =>
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => console.log(`${options?.method || "GET"} request`, data))
      .catch((error) => console.error("Error:", error));

  const sendImageRequest = () => {
    const img = new Image();
    img.src = `${baseUrl}/img.jpg?${Math.random()}`;
    document.body.appendChild(img);
  };

  const sendCSSRequest = () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${baseUrl}/styles.css?${Math.random()}`;
    document.head.appendChild(link);
  };

  const sendJSRequest = () => {
    const script = document.createElement("script");
    script.src = `${baseUrl}/script.js?${Math.random()}`;
    document.head.appendChild(script);
  };

  const sendFontRequest = () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap`;
    document.head.appendChild(link);
  };

  const sendMediaRequest = () => {
    const audio = new Audio(`${baseUrl}/audio.mp3?${Math.random()}`);
    audio.play().catch((error) => console.error("Error:", error));
  };

  const sendWebSocketRequest = () => {
    const ws = new WebSocket("wss://echo.websocket.org");
    ws.onopen = () => ws.send("Hello WebSocket");
    ws.onmessage = (event) => console.log("WebSocket message", event.data);
    ws.onerror = (error) => console.error("WebSocket error", error);
  };

  const sendWasmRequest = () => {
    fetch(
      "https://cdn.jsdelivr.net/gh/mdn/webassembly-examples@master/wasm-fibonacci/wasm_fibonacci.wasm"
    )
      .then((response) => response.arrayBuffer())
      .then((bytes) => WebAssembly.instantiate(bytes))
      .then((results) => console.log("Wasm request", results))
      .catch((error) => console.error("Error:", error));
  };

  const spamRequests = () => {
    sendRequest(`${baseUrl}/posts`);
    sendRequest(`${baseUrl}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
    });
    sendRequest(`${baseUrl}/posts/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 1, title: "foo", body: "bar", userId: 1 }),
    });
    sendRequest(`${baseUrl}/posts/1`, { method: "DELETE" });
    sendImageRequest();
    sendCSSRequest();
    sendJSRequest();
    sendFontRequest();
    sendMediaRequest();
    sendRequest(`${baseUrl}/manifest.json`);
    sendWebSocketRequest();
    sendWasmRequest();
  };

  setInterval(spamRequests, 555);

  const spamNetwork = () => spamRequests();
  spamNetwork();
}
