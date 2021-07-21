import Joi from 'joi'
 export const commentValidation = (data:object) => {
     let schema = Joi.object({
         comment: Joi.string().required()
     })
     return schema.validate(data);

 }