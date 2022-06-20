import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from '@routes/Routes';

// import {prismaClient} from 'src/prismadb/prismaConnect'

export class App {
   public express: express.Application;

   constructor() {
      this.express = express();
      this.midleware();
      this.router();
      // this.database();
   }

   private midleware() {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use(bodyParser.json())
   }

   // private database(){
   //    MongoConnect.connection()
   // }

   private router() {
      this.express.use(routes)
   }
}