import express from "express";
import { Request, Response } from "express";
import cookieParser from "cookie-parser";
import vhost from "vhost";

import websiteRouter from "./routes/website";
import dashboardRouter from "./routes/dashboard";

import { port, domains } from "./config.json";

const app: express.Application = express();
app.use(cookieParser());
app.use(express.urlencoded());

app.use(vhost(domains.website, websiteRouter));
app.use(vhost(domains.dashboard, dashboardRouter));

app.listen(port);
console.log("Running on port " + port);
