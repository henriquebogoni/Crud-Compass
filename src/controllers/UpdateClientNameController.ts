import { Request, Response } from 'express'

import { UpdateClientNameBusiness } from '@business/UpdateClientNameBusiness';
const updateClientNameBusiness = new UpdateClientNameBusiness()

class UpdateClientNameController {
    async updateNameClient(req: Request, res: Response) {
        const updateName = await updateClientNameBusiness.updateNameClient(req)
        return res.json(updateName)
    }
}
export { UpdateClientNameController }