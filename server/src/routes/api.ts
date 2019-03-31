import { Router, Response, Request, NextFunction } from "express";
import express from "express";
import passport from "passport";
import crypto from "crypto";
import { signatureSecret, signatureTimeframe, signatureAlgorithm } from "../config.json";

function getTimedSecret(time: number = new Date().getTime()) {
    const hash = crypto.createHmac(signatureAlgorithm, signatureSecret ).update(time.toString()).digest('hex');
    return {
        secret: hash,
        time
    }
}

function getSignature(userID: string, timedSecret: any = getTimedSecret()) {
    const signature = crypto.createHmac(signatureAlgorithm, timedSecret.secret).update(userID).digest('hex');
    return {
        signature,
        timeframe: signatureTimeframe,
        creation: timedSecret.time,
        userID,
    }
}

function loggedIn(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
        next();
    } else {
        res.status(403).json({
            code: 403,
            error: "not authenticated",
        });
    }
}

const apiRouter: Router = Router();

apiRouter.get('/login', passport.authenticate('discord'));

apiRouter.get('/login/callback', passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect('//dashboard.cascadebot.org');
});

apiRouter.get('/me', (req, res) => {
    res.send(req.user);
    console.log(req.user);
});

apiRouter.get('/gettoken', loggedIn, ( req: Request, res: Response) => {
    res.json(getSignature(req.user.id));
});

apiRouter.post('/istokenvalid', ( req: Request, res: Response) => {
    if (parseInt(req.body.creation) + signatureTimeframe <= new Date().getTime()) {
        return res.json({
            valid: false,
        })
    }
    const isValid = (req.body.signature == getSignature(req.body.userID, getTimedSecret(req.body.creation)).signature);
    return res.json({
        valid: isValid,
    });
});

export default apiRouter;
