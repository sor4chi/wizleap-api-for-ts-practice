const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  try {
    res.send({ name: "hoge" });
  } catch (error) {
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;
app.listen(port);

export default app;
