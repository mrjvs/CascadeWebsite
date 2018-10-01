import { NextFunction, Request, Response } from "express";

function isLoggedIn(req: Request, res: Response, next: NextFunction): void {

    // TODO add auth checker.
    req.isLoggedIn = false;
    req.user = {};
}

export default isLoggedIn;
