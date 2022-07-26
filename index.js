import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/bookings.js";
import { MongoClient } from "mongodb";

const app = express();
const port = 4000;
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", async (req, res) => res.send("This is working"));

app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

const client = new MongoClient(process.env.CONNECTION_URL);
const db = client.db();
const dbName = db.database;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => app.listen(() => console.log(`Database connected`)))
  .catch((error) => console.log(error.message));
