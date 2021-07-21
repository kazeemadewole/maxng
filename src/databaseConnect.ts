import { createConnection } from  'typeorm';
import dotenv from 'dotenv';
import { CommentModel } from './model/CommentModel';
import { FilmModel } from './model/FilmModel';

dotenv.config();

 const ORMConfig = async () => {
   console.log('here is db');
    try {
      await createConnection({
        type: 'postgres',
        host: process.env.HOST,
        port: 5432, 
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        entities: [CommentModel, FilmModel],
        synchronize: true,
      });
      console.log('Connected to Postgres'); 
    } catch (error) {
      console.error(error);
    }
  };
  export = ORMConfig