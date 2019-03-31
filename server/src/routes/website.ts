import { Router, Response, Request } from "express";
import express from "express";
import path from "path";

const websiteRouter: Router = Router();

websiteRouter.get("/", (req: Request, res: Response) => {
    res.sendFile("index.html", { root: path.join(__dirname, "../../../website") });
});

websiteRouter.use(express.static(path.join(__dirname, "../../../website/public")));

websiteRouter.use((req: Request, res: Response) => {
    res.sendFile("404.html", { root: path.join(__dirname, "../../../website") });
})

export default websiteRouter;
