const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/device", function (req, res) {
  const userId = req.body.userId;
  const userEmail = req.body.userEmail;
  const token = req.body.token;
  console.log(userId, userEmail, token);
  res.status(200).send();
});

app.get("/test", function (req, res) {
  console.log("TEST", new Date());
  res.status(200).send();
});

app.post("/test", function (req, res) {
  console.log("TEST", new Date());
  res.status(200).send();
});

app.get("/", function (req, res) {
  res.json({ data: 200 });
  // res.send("<h1>Hello world</h1>");
});

app.get("/auth", function (req, res) {
  if (req.params || req.query || req.body) {
    const { query, body, params, status, headers } = req;

    console.log(query, body, params, status, headers);
  }

  res.json({ user: "root", password: "" });

  // res.send("<h1>Hello world</h1>");
});

app.listen(8080, function () {
  console.log("listening on *:8080");
});
