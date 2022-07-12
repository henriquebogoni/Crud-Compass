import { body, check, validationResult } from 'express-validator';
import { uf } from '../enum/EnumUF'

export const createCityValidate = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('O campo name é obrigatório.')
        .isLength({ min: 3 })
        .withMessage('O campo name deve ter no minimo 3 caracteres.')
        .isString()
        .withMessage('name deve ser uma string'),
    body('uf')
        .not()
        .isEmpty()
        .withMessage('O campo uf é obrigatório.')
        .isString()
        .withMessage('uf deve ser uma string')
        .isIn(uf)
        .withMessage(`uf deve ser um desses ${uf}`),
    (req: any, res: any, next: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });
        next();
    },
];
