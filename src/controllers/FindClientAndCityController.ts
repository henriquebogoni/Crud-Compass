import { Request, Response } from 'express'

import { FindClientAndCityBusiness } from '@business/FindClientAndCityBusiness';
const findClientAndCityBusiness = new FindClientAndCityBusiness()

class FindClientAndCityController {
    async findClient(req: Request, res: Response) {
        const findClient = await findClientAndCityBusiness.findClient(req.query)
        return res.status(200).json(findClient)
    }

    async findCity(req: Request, res: Response) {
        const findCity = await findClientAndCityBusiness.findCity(req.query)
        return res.status(200).json(findCity)
    }
}
export {FindClientAndCityController}