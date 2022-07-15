import express from 'express';
import cors from 'cors';

import routes from '@routes/Routes';

export class App {
   public express: express.Application;

   constructor() {
      this.express = express();
      this.midleware();
      this.router();
   }

   private midleware() {
      this.express.use(express.json())
      this.express.use(cors())
   }

   private router() {
      this.express.use(routes)
   }
}