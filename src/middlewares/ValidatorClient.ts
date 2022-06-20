import { body, validationResult } from 'express-validator';

export const createClientValidate = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('O campo name é obrigatório.')
        .isLength({ min: 3 })
        .withMessage('O campo name deve ter no minimo 3 caracteres.')
        .isString()
        .withMessage('name deve ser uma string'),
    body('sexo')
        .not()
        .isEmpty()
        .withMessage('O campo sexo é obrigatório.')
        .isIn(['masculino', 'feminino'])
        .withMessage('O campo sexo deve ser: [masculino ou feminino].')
        .isString()
        .withMessage('sexo deve ser uma string'),
    body('dateNasc')
        .not()
        .isEmpty()
        .withMessage('O campo dateNasc é obrigatório.')
        .isString()
        .withMessage('dateNasc deve ser uma string'),
    body('age')
        .not()
        .isEmpty()
        .withMessage('O campo age é obrigatório.')
        .isString()
        .withMessage('age deve ser uma string'),
    body('city')
        .not()
        .isEmpty()
        .withMessage('O campo city é obrigatório.')
        .isString()
        .withMessage('city deve ser uma string'),
    (req: any, res: any, next: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];
