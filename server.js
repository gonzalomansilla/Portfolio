//para renderizar pagina completamente
const express = require('express');
const app = express();

app.use(express.static('./'));  //Path del archivo estatico HTML

const server = app.listen(8000, function () {
  console.log('server is running at %s', server.address().port);
});
