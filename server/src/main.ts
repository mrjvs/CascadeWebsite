import express from "express";
import { Request, Response } from "express";
import cookieParser from "cookie-parser";
import vhost from "vhost";
import passport from "passport";
import session from 'express-session';
import { Strategy as DiscordStrategy } from "passport-discord";

import { port, domains, sessionSecret } from "./config.json";

passport.use(new DiscordStrategy({
    clientID: '373786323774996480',
    clientSecret: 'lZ1f0wspcy40_ex-MOHSVsfp5Nka5ULO',
    callbackURL: '/login/callback',
    scope: [
        'identify',
    ],
}, function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
}));

passport.serializeUser(function(user: any, done) {
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function(obj: string, done) {
    done(null, JSON.parse(obj));
});

import websiteRouter from "./routes/website";
import dashboardRouter from "./routes/dashboard";
import apiRouter from "./routes/api";

const app: express.Application = express();
app.use(cookieParser());
app.use(express.urlencoded());

app.use(session({
	secret: sessionSecret,
	saveUninitialized: true,
	resave: true,
	cookie: {
		maxAge: 3600000,
		httpOnly: true//, // remove on production
		/*secure: true*/ // uncomment on production
	},
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(vhost(domains.website, websiteRouter));
app.use(vhost(domains.dashboard, dashboardRouter));
app.use(vhost(domains.api, apiRouter));

app.listen(port);
console.log("Running on port " + port);
