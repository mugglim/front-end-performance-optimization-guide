const express = require('express');
const app = express();
const port = 5_001;
const path = require('path');

const header = {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'max-age=10');
  },
};

app.use(express.static(path.join(__dirname, '../build'), header));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
