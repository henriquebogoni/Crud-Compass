import { Request, Response } from 'express'

import { DeleteClientBusiness } from '@business/DeleteClientBusiness';
const deleteClientBusiness = new DeleteClientBusiness()

class DeleteClientController {
    async deleteClient(req: Request, res: Response) {
        const deleteClient = await deleteClientBusiness.deleteClient(req.params)
        if (deleteClient.count > 0) {
            return res.status(204).end()
        } else {
            return res.status(404).json({message: 'Usuário não encontrado'})
        }
    }
}
export { DeleteClientController }