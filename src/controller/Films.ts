import {Request, Response} from 'express';
import  axios from "axios";

export const getAll = async (req:Request, res:Response) => {
  let result;
  try {
    const data = await axios.get(`https://swapi.dev/api/films`);
    result = data.data.results.map((each:Record<string,any>) => {
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
    console.log(data.data);
    return res.status(200).json({
      result: data.data,
    });
  } catch (error) {
    return res.status(404).json({
      status: "failed",
      error: error.message,
    });
  }
};


