import { Request, Response } from 'express'

import { UpdateClientNameBusiness } from '@business/UpdateClientNameBusiness';
const updateClientNameBusiness = new UpdateClientNameBusiness()

class UpdateClientNameController {
    async updateClient(req: Request, res: Response) {
        const updateClient = await updateClientNameBusiness.updateClient(req.body)
        res.status(204).json(updateClient)
    }
}
export { UpdateClientNameController }