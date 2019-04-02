import express from "express";

// local imports
import websiteRouter from "./routes/website";

// express setup
const app: express.Application = express();
app.use(websiteRouter);

const port : number = Number(process.env.PORT) || 8080;

app.listen(port);
console.log(`Running on port ${port}`);
