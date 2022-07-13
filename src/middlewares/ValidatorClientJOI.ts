import Joi from 'joi';
import { Request, Response } from 'express'

export function validateClientJOI(req: Request, res: Response, next: any) {
    const schema = Joi.object({
        name: Joi.string().required(),
        sexo: Joi.string().required(),
        dateNasc: Joi.string().required(),
        age: Joi.string().required(),
        city: Joi.string().required()
    }).options({ abortEarly: false })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).send(error.details)
    }
    next()
}
