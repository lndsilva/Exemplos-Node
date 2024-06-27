const express = require("express");

const app = express();

const port = 3000;

//página 404 personalizada
app.use((rep, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - not found");
});

//página 500 personalizada
app.use((err, req, res, next) => {
  console.log(err.message);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});

app.listen(port, () => {
  `Express started on http://localhost:${port}`; + `press CTRL-C to terminate.`
});
