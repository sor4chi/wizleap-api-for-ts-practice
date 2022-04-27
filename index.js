const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbPath = path.resolve(__dirname, "db.sqlite3");
const db = new sqlite3.Database(dbPath);

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(rows);
    }
  });
});

app.post("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { name, lastname, age } = req.body;
  db.run(
    "INSERT INTO users (name, lastname, age) VALUES (?, ?, ?)",
    [name, lastname, age],
    function(err) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.send("Success");
      }
    }
  );
});

app.post("/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { name, lastname, age } = req.body;
  db.run(
    "UPDATE users SET name = ?, lastname = ?, age = ? WHERE id = ?",
    [name, lastname, age, req.params.id],
    function(err) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.send("Success");
      }
    }
  );
});

app.delete("/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  db.run("DELETE FROM users WHERE id = ?", [req.params.id], function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send("Success");
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port);