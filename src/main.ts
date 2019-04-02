import express from "express";

// configuration
import { port } from "./config.json";

// local imports
import webisteRouter from "./routes/website";

// express setup
const app: express.Application = express();
app.use(webisteRouter);

app.listen(port);
console.log(`Running on port ${port}`);
