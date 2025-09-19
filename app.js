import express from 'express';
import session from 'express-session';
import path from 'path';
import Router from './src/controllers/Router.js';
import { __dirname } from './paths.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
}))


app.use(Router)
