import { prismaClient } from '../prismadb/prismaConnect'
import { IClient } from '@interfaces/IClient'

class UpdateClientNameBusiness {
    async updateClient(client: IClient) {

        const find = await prismaClient.client.findMany({where: {id: client.id}})

        if (find.length > 0) {
            await prismaClient.client.update({
                where: {
                    id: client.id
                },
                data: {
                    name: client.name
                }
            })
        }else{
            return { message: 'Id não encontrado' }
        }
    }
}

export { UpdateClientNameBusiness }