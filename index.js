const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  try {
    const data = fs.readFileSync("data.json", "utf8");
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.post("/", (req, res) => {
  try {
    const data = fs.readFileSync("data.json", "utf8");
    const newData = JSON.parse(data);
    newData.push(req.body);
    fs.writeFileSync("data.json", JSON.stringify(newData));
    res.send(newData);
  } catch (error) {
    res.send(error);
  }
});

app.post("/:id", (req, res) => {
  try {
    const data = fs.readFileSync("data.json", "utf8");
    const newData = JSON.parse(data);
    const id = req.params.id;
    const newDataId = newData.findIndex((item) => item.id === id);
    newData[newDataId] = req.body;
    fs.writeFileSync("data.json", JSON.stringify(newData));
    res.send(newData);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/:id", (req, res) => {
  try {
    const data = fs.readFileSync("data.json", "utf8");
    const newData = JSON.parse(data);
    const id = req.params.id;
    const newDataId = newData.findIndex((item) => item.id === id);
    newData.splice(newDataId, 1);
    fs.writeFileSync("data.json", JSON.stringify(newData));
    res.send(newData);
  } catch (error) {
    res.send(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port);

export default app;
