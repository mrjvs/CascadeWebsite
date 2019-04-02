import { Router, Response, Request, NextFunction } from "express";
import express from "express";
import path from "path";

const websiteRouter: Router = Router();
const websiteRoot: string = path.join(__dirname, "../../website");
const websiteAssets: string = path.join(websiteRoot, "public");

// serve static website files
websiteRouter.use(express.static(websiteAssets));

// routes
websiteRouter.get("/", (req: Request, res: Response): void => {
    return res.sendFile("index.html", {
        root: websiteRoot
    });
});

// 404
websiteRouter.use((req: Request, res: Response, next: NextFunction): void => {
    return res.sendFile("404.html", {
        root: websiteRoot
    });
});

export default websiteRouter;
