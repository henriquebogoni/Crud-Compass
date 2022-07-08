import { Request, Response } from 'express'

import { DeleteClientBusiness } from '@business/DeleteClientBusiness';
const deleteClientBusiness = new DeleteClientBusiness()

class DeleteClientController {
    async deleteClient(req: Request, res: Response) {
        const delClient = await deleteClientBusiness.deleteClient(req.params)
        return res.status(204).json(delClient)
    }
}
export { DeleteClientController }