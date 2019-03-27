import express from "express";
import { Request, Response } from "express";
import cookieParser from "cookie-parser";

import websiteRouter from "./routes/website";
import dashboardRouter from "./routes/dashboard";

import { port } from "./config.json";

const app: express.Application = express();
app.use(cookieParser());
app.use(express.urlencoded());

// app.use(websiteRouter);
app.use(dashboardRouter);

app.listen(port);
console.log("Running on port " + port);
