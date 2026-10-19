const express = require("express");
const logger = require("./loggerMiddleware");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000);
