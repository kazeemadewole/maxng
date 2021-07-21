import {Request, Response} from 'express';
import {CommentModel} from '../model/CommentModel';
import { createQueryBuilder } from "typeorm";

const createComment = async (req:Request, res:Response) => {
    const {comment} =  req.body;
    const episode_id = parseInt(req.params.id);
    try{

    const AddComment = CommentModel.create({
        episode_id,
        comment
    })
    await comment.save();
    return res.status(201).json({
        status: 'successfull',
        msg: "comment added",
      });
    } catch (error) {
      return res.status(404).json({
          status: 'failed',
          error: error.message
      })
    }

}

const getCommentById = async  (req:Request, res:Response) => {
    const id = req.params.id;
    try {
        const {id} = req.params;
        const comments = await createQueryBuilder("comment")
          .select("comments.id")
          .addSelect("comments.comments")
          .addSelect("comments.created_at")
          .addSelect("comments.episode_id")
          .from(Comment, "comments")
          .where("comments.id = :id", { id: parseInt(id) })
          .getOne();
        return res.status(201).json({
            status: 'successful',
            comments 
        });
      } catch (error) {
        res.status(404).json({
            status: 'failed',
            error: error.message
        })
      }
}

const getAllComment = async (req:Request, res:Response)=> {
    try {
        const comments = await createQueryBuilder("comment")
          .select("comments.id")
          .addSelect("comments.comments")
          .addSelect("comments.created_at")
          .addSelect("comments.episode_id")
          .from(Comment, "comments")
          .getMany();
          return res.status(201).json({
            status: 'successful',
            comments 
        });
      } catch (error) {
        res.status(404).json({
            status: 'failed',
            error: error.message
        })
      }
}

const editComment = (req:Request, res:Response) => {
    //to edit a comment

}

const deleteComment = (req:Request, res:Response) => {
    //to delete a comment

}