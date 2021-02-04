// Imports from thrid party libraries
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Imports from other files
import Data from "./data.js";

// Server configuration
const server = express();
const port = 8000;
dotenv.config();

// Middleware

// API endpoints
server.get("/", (req, res, next) => {
  res.status(200).send("Hello from TikTok Clone Backend");
});

server.get("/posts", (req, res, next) => {
  res.status(200).send(Data);
});

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
      console.log(connection_url);
    });
  })
  .catch((err) => {
    console.log(err);
  });
