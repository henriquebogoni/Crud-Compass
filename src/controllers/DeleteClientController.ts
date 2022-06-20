import { Request, Response } from 'express'

import { DeleteClientBusiness } from '@business/DeleteClientBusiness';
const deleteClientBusiness = new DeleteClientBusiness()

class DeleteClientController {
    async deleteClient(req: Request, res: Response) {
        const delClient = await deleteClientBusiness.deleteClient(req.body)
        return res.json(delClient)
    }
}
export { DeleteClientController }