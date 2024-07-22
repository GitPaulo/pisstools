// networkSpam.js
{
  function spamNetwork() {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    function sendGetRequest() {
      fetch(`${baseUrl}/posts`)
        .then(response => response.json())
        .then(data => console.log('GET request', data))
        .catch(error => console.error('Error:', error));
    }

    function sendPostRequest() {
      fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
      })
        .then(response => response.json())
        .then(data => console.log('POST request', data))
        .catch(error => console.error('Error:', error));
    }

    function sendPutRequest() {
      fetch(`${baseUrl}/posts/1`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: 1, title: 'foo', body: 'bar', userId: 1 })
      })
        .then(response => response.json())
        .then(data => console.log('PUT request', data))
        .catch(error => console.error('Error:', error));
    }

    function sendDeleteRequest() {
      fetch(`${baseUrl}/posts/1`, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(data => console.log('DELETE request', data))
        .catch(error => console.error('Error:', error));
    }

    function sendImageRequest() {
      const img = new Image();
      img.src = `${baseUrl}/img.jpg?${Math.random()}`;
      document.body.appendChild(img);
    }

    function sendCSSRequest() {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${baseUrl}/styles.css?${Math.random()}`;
      document.head.appendChild(link);
    }

    function sendJSRequest() {
      const script = document.createElement('script');
      script.src = `${baseUrl}/script.js?${Math.random()}`;
      document.head.appendChild(script);
    }

    function sendFontRequest() {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap`;
      document.head.appendChild(link);
    }

    function sendMediaRequest() {
      const audio = new Audio(`${baseUrl}/audio.mp3?${Math.random()}`);
      audio.play().catch(error => console.error('Error:', error));
    }

    function sendManifestRequest() {
      fetch(`${baseUrl}/manifest.json`)
        .then(response => response.json())
        .then(data => console.log('Manifest request', data))
        .catch(error => console.error('Error:', error));
    }

    function sendWebSocketRequest() {
      const ws = new WebSocket('wss://echo.websocket.org');
      ws.onopen = () => ws.send('Hello WebSocket');
      ws.onmessage = event => console.log('WebSocket message', event.data);
      ws.onerror = error => console.error('WebSocket error', error);
    }

    function sendWasmRequest() {
      fetch('https://cdn.jsdelivr.net/gh/mdn/webassembly-examples@master/wasm-fibonacci/wasm_fibonacci.wasm')
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes))
        .then(results => console.log('Wasm request', results))
        .catch(error => console.error('Error:', error));
    }

    function spamRequests() {
      sendGetRequest();
      sendPostRequest();
      sendPutRequest();
      sendDeleteRequest();
      sendImageRequest();
      sendCSSRequest();
      sendJSRequest();
      sendFontRequest();
      sendMediaRequest();
      sendManifestRequest();
      sendWebSocketRequest();
      sendWasmRequest();
    }

    // Spam requests every 2 seconds
    setInterval(spamRequests, 555);
  }

  // Start spamming network tab
  spamNetwork();
}
