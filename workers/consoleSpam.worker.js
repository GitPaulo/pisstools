// spamWorker.js
{
  let devtoolsHeight = 500;
  let devtoolsWidth = 600;
  self.onmessage = function (event) {
    devtoolsHeight = event.data.devtoolsHeight;
    devtoolsWidth = event.data.devtoolsWidth;
  };

  const spamLine = "===N=O==D=E=V=E=L=O=P=E=R==T=O=O=L=S===";
  const generateSpamData = (rows, columns) => {
    const spamData = [];
    for (let i = 0; i < rows; i++) {
      const row = {};
      for (let j = 0; j < columns; j++) {
        row[j] = spamLine;
      }
      spamData.push(row);
    }
    return spamData;
  };

  setInterval(() => {
    const rows = Math.max(50, Math.floor(devtoolsHeight / 20));
    const columns = Math.max(
      10,
      Math.floor(devtoolsWidth / (spamLine.length + 2))
    );
    const spamData = generateSpamData(rows, columns);
    console.table(spamData);
  }, 444);
}
