import {Request, Response} from 'express';
import {CommentModel} from '../model/CommentModel';
import { createQueryBuilder } from "typeorm";
import  axios from "axios";

export const getAll = async (req:Request, res:Response) => {
  let result:Record<string,any> = [];
  let output: Record<string,any> = [];
  try {
    console.log('here');
    const data = await axios.get(`https://swapi.dev/api/films`);
    console.log(data)

    for(let i = 0; i < data.data.results.length; i++){
      let data: Record<string,any> = {};
      let each = data.data.results[i];
      data.title = each.title;
      data.episode_id = each.episode_id;
      data.opening_crawl = each.opening_crawl;
      data.release_date = each.release_date;

      const id = each.episode_id;
      const comments = await createQueryBuilder("comment")
      .select("comments.id")
      .addSelect("comments.comment")
      .addSelect("comments.created_at")
      .addSelect("comments.episode_id")
      .from(CommentModel, "comments")
      .where("comments.episode_id = :id", { id: parseInt(id) })
      .getOne();

      data.comment = comments;
      output.push(data);
      
    }

    console.log('output',output);
   
    const sortedResult = output.sort((a:Record<string,any>, b:Record<string,any>) => b.release_date - a.release_date);
    return res.status(200).json({
      result: sortedResult,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      error: error.message,
    });
  }
};

export const getOne = async (req:Request, res:Response) => {
  let movieId = req.params.id;
  try {
    const data = await axios.get(`https://swapi.dev/api/films/${movieId}`);
    const id = 1;

    let output: Record<string,any> = {};

      output.title = data.data.title;
      output.episode_id = data.data.episode_id;
      output.opening_crawl = data.data.opening_crawl;
      output.release_date = data.data.release_date;

    const comments = await createQueryBuilder("comment")
      .select("comments.id")
      .addSelect("comments.comment")
      .addSelect("comments.created_at")
      .addSelect("comments.episode_id")
      .from(CommentModel, "comments")
      .where("comments.episode_id = :id", { id: id })
      .getMany();

      let comment = comments? comments : 'No Comment Available';
      output.comment = comment;

    return res.status(200).json({
      status: 'successful',
      result: output,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      error: error.message,
    });
  }
};


