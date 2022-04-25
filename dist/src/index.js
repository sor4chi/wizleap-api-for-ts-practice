"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    try {
        res.send({ name: "hoge" });
    }
    catch (error) {
        res.sendStatus(500);
    }
});
app.listen({ port: 3000 }, function () {
    console.log("Server ready at http://localhost:3000");
});
console.log('starts');
exports.default = app;
