// Imports from thrid party libraries
import express from "express";
import mongoose from "mongoose";

const server = express();
const port = 8000;

server.get("/", (req, res, next) => {
  res.status(200).send("Hello from TikTok Clone Backend");
});

server.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
