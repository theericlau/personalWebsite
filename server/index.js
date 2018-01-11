const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.listen(process.env.PORT || 8000, () => {
  console.log('Listening to the port 8000');
});
