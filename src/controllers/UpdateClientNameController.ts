import { Request, Response } from 'express'

import { UpdateClientNameBusiness } from '@business/UpdateClientNameBusiness';
const updateClientNameBusiness = new UpdateClientNameBusiness()

class UpdateClientNameController {
    async updateClient(req: Request, res: Response) {
        await updateClientNameBusiness.updateClient(req.body)
        return res.status(204).end()
    }
}
export { UpdateClientNameController }