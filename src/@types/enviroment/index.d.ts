declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PGPORT: number;
    }
  }
}

export {};
