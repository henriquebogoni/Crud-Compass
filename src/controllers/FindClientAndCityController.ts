import { Request, Response } from 'express'

import { FindClientAndCityBusiness } from '@business/FindClientAndCityBusiness';
const findClientAndCityBusiness = new FindClientAndCityBusiness()

class FindClientAndCityController {
    async findClientId(req: Request, res: Response) {
        const findClientId = await findClientAndCityBusiness.findClientId(req.params)
        return res.json(findClientId)
    }

    async findClientName(req: Request, res: Response) {
        const findClientName = await findClientAndCityBusiness.findClientName(req.params)
        return res.json(findClientName)
    }

    async findCityName(req: Request, res: Response) {
        const findCityName = await findClientAndCityBusiness.findCityName(req.params)
        return res.json(findCityName)
    }

    async findCityUF(req: Request, res: Response) {
        const findCityUF = await findClientAndCityBusiness.findCityUF(req.params)
        return res.json(findCityUF)
    }
}
export {FindClientAndCityController}