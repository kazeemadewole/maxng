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
        url: process.env.DATABASE_URL,
        entities: [CommentModel, FilmModel],
        synchronize: true,
            ssl: {
            rejectUnauthorized: false
        }
        })
      console.log('Connected to Postgres'); 
    } catch (error) {
      console.error(error);
    }
  };
  export = ORMConfig