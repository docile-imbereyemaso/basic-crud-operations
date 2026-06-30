import express from "express";
import fs from "fs/promises";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { v4 as uuid } from "uuid";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_FILE = path.join(__dirname, "database", "data.json");

app.listen(3000, () => {
  console.log(`Server is running on port: 3000`);
});
