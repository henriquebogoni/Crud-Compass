import { Request, Response } from 'express'
import { CreatedClientAndCityBusiness } from '@business/CreatedClientAndCityBusiness'

const createdClientAndCityBusiness = new CreatedClientAndCityBusiness();

class CreatedClientAndCityController {
    async createClient(req: Request, res: Response) {
        const responseClient = await createdClientAndCityBusiness.createClient(req.body)
        return res.status(201).json(responseClient)
    }

    async createCity(req: Request, res: Response) {
        const responseCity = await createdClientAndCityBusiness.createCity(req.body)
        return res.status(201).json(responseCity)
    }
}
export { CreatedClientAndCityController }