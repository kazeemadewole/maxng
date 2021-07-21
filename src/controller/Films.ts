import {Request, Response} from 'express';
import {CommentModel} from '../model/CommentModel';
import { createQueryBuilder } from "typeorm";
import  axios from "axios";

export const getAll = async (req:Request, res:Response) => {
  let result;
  try {
    const data = await axios.get(`https://swapi.dev/api/films`);
    result = data.data.results.map( async (each:Record<string,any>) => {
       //geting the comment
    const {id} = each.episode_id;
    const comments = await createQueryBuilder("comment")
      .select("comments.id")
      .addSelect("comments.comments")
      .addSelect("comments.created_at")
      .addSelect("comments.episode_id")
      .from(Comment, "comments")
      .where("comments.episode_id = :id", { id: parseInt(id) })
      .getOne();
      each.comment = comments;
      return each;
    });

    const sortedResult = result.sort((a:Record<string,any>, b:Record<string,any>) => b.release_date - a.release_date);
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
    const {id} = data.data.episode_id;
    const comment = await createQueryBuilder("comment")
      .select("comments.id")
      .addSelect("comments.comments")
      .addSelect("comments.created_at")
      .addSelect("comments.episode_id")
      .from(Comment, "comments")
      .where("episode_id = :id", { id: parseInt(id) })
      .getOne();
      data.data.comment = comment;

    return res.status(200).json({
      status: 'successful',
      result: data.data,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      error: error.message,
    });
  }
};


