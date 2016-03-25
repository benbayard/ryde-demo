const express = require("express");
const app = express();
const api = express();

const { getTrips } = require("./trips");

app.use(express.static('public'));
app.use("/api/v1", api);

api.get("/trips", (req, res) => {
  getTrips().then((trips) => {
    res.send(trips);
  });
});

app.get("/", (req, res) => {
  res.send(`
<html>
  <head>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="icons.css">
  </head>
  <body>
      <div id="react-anchor" />
      <script type="text/javascript" src="http://localhost:8080/bundle.js" charset="utf-8"></script>

  </body>
</html>
  `);
});

app.listen(3000, () => {
  console.log("Ryde is ready to be used");
});
