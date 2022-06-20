import { prismaClient } from '../prismadb/prismaConnect'

class UpdateClientNameBusiness {
    async updateNameClient(client: any) {
        return await prismaClient.client.update({
            where: {
                id: client.params.id
            },
            data:{ 
                name: client.body.name
            }
        })
    }
}

export { UpdateClientNameBusiness }