// Imports from thrid party libraries
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Imports of routes
const postRoutes = require("./routes/posts-routes.js");

// Server configuration
const server = express();
const port = 8000;
dotenv.config();

// Middleware
server.use(bodyParser.json());

// API endpoints
server.get("/", (req, res, next) => {
  res.status(200).send("Hello from TikTok Clone Backend");
});

server.use("/posts", postRoutes);

// DB configuration
const connection_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@portfolio.us1zu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(connection_url, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    server.listen(port, () => {
      console.log(`Listening on localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
