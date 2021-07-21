import {Request, Response} from 'express';
import {CommentModel} from '../model/CommentModel';
import { createQueryBuilder } from "typeorm";

export const createComment = async (req:Request, res:Response) => {
  console.log('comment')
    const {comment} =  req.body;
    const episode_id = parseInt(req.params.id);
    try{

    const AddComment = CommentModel.create({
        episode_id,
        comment
    })
    await AddComment.save();
    return res.status(201).json({
        status: 'successfull',
        data: AddComment,
      });
    } catch (error) {
      return res.status(404).json({
          status: 'failed',
          error: error.message
      })
    }

}

export const getCommentById = async  (req:Request, res:Response): Promise<any> => {
    const id = req.params.id;
    try {
        const comments = await createQueryBuilder("comment")
          .select("comments.id")
          .addSelect("comments.comment")
          .addSelect("comments.created_at")
          .addSelect("comments.episode_id")
          .from(CommentModel, "comments")
          .where("comments.episode_id = :id", { id: parseInt(id) })
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

export  const getAllComment = async (req:Request, res:Response) : Promise<any> => {
    try {
        const comments = await createQueryBuilder("comment")
          .select("comments.id")
          .addSelect("comments.comments")
          .addSelect("comments.created_at")
          .addSelect("comments.episode_id")
          .from(CommentModel, "comments")
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

export  const editComment = (req:Request, res:Response) => {
    //to edit a comment
    console.log('edited comment');
    return res.status(200).json({
      message : 'message'
    })

}

export const deleteComment = (req:Request, res:Response) => {
    //to delete a comment

}