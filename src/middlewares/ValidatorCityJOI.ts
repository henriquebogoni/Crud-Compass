import Joi from 'joi';
import { Request, Response } from 'express'
import { uf } from '../enum/EnumUF'

export function validateCityJOI(req: Request, res: Response, next: any) {
    const schema = Joi.object({
        name: Joi.string().required(),
        uf: Joi.string().required().valid(...Object.values(uf))
    }).options({ abortEarly: false })

    const { error } = schema.validate(req.body)
    if (error) {
        return res.status(400).send(error.details)
    }
    next()
}
