import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

export default app;
