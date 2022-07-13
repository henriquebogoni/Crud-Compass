import Joi from 'joi';
import { Request, Response } from 'express'

export function validateCityJOI(req: Request, res: Response, next: any) {
    const schema = Joi.object({
        name: Joi.string().required(),
        uf: Joi.string().required()
    }).options({ abortEarly: false })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).send(error.details)
    }
    next()
}
