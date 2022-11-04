import * as express from "express";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PGPORT: number;
    }
  }
}
