import { Request, Response } from 'express'

import { FindClientAndCityBusiness } from '@business/FindClientAndCityBusiness';
const findClientAndCityBusiness = new FindClientAndCityBusiness()

class FindClientAndCityController {
    async findClient(req: Request, res: Response) {
        const findClient = await findClientAndCityBusiness.findClient(req.query)
        if(findClient.length > 0){
            return res.status(200).json(findClient)
        }else{
            return res.status(204).end()
        }
    }

    async findCity(req: Request, res: Response) {
        const findCity = await findClientAndCityBusiness.findCity(req.query)
        if(findCity.length > 0){
            return res.status(200).json(findCity)
        }else{
            return res.status(204).end()
        }
    }
}
export {FindClientAndCityController}