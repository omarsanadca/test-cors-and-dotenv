import "dotenv/config";
import express from "express";

import customCorsMiddleware from "./config/cors.js";

const app = express();

app.use(express.json());

app.use(customCorsMiddleware);

app.use("/", (req, res) => {
  res.json({ message: "Server is working!", env: process.env.NODE_ENV });
});

app.get("/courses", (req, res, next) => {
  res.json({ message: "GET all courses" });
});

app.post("/courses", (req, res, next) => {
  res.json({ message: "add a new courses" });
});

app.put("/courses", (req, res, next) => {
  res.json({ message: "edit a course" });
});

app.delete("/courses", (req, res, next) => {
  res.json({ message: "delete a courses" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(`Server running on PORT ${PORT}`);
});
