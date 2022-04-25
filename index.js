const express = require("express");
const app = express();
const fs = require("fs");
import * as path from "path";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dataJsonPath = path.resolve(__dirname, "data.json");

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const data = fs.readFileSync(dataJsonPath, "utf8");
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.post("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const data = fs.readFileSync(dataJsonPath, "utf8");
    const newData = JSON.parse(data);
    newData.push(req.body);
    fs.writeFileSync(dataJsonPath, JSON.stringify(newData));
    res.send(newData);
  } catch (error) {
    res.send(error);
  }
});

app.post("/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const data = fs.readFileSync(dataJsonPath, "utf8");
    const newData = JSON.parse(data);
    const id = req.params.id;
    const newDataId = newData.findIndex((item) => item.id === id);
    newData[newDataId] = req.body;
    fs.writeFileSync(dataJsonPath, JSON.stringify(newData));
    res.send(newData);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const data = fs.readFileSync(dataJsonPath, "utf8");
    const newData = JSON.parse(data);
    const id = req.params.id;
    const newDataId = newData.findIndex((item) => item.id === id);
    newData.splice(newDataId, 1);
    fs.writeFileSync(dataJsonPath, JSON.stringify(newData));
    res.send(newData);
  } catch (error) {
    res.send(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port);

export default app;
