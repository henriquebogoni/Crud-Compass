import { prismaClient } from '../prismadb/prismaConnect'
import {IClient} from '@interfaces/IClient'

class UpdateClientNameBusiness {
    async updateClient(client: IClient) {
        return await prismaClient.client.update({
            where: {
                id: client.id
            },
            data:{ 
                name: client.name
            }
        })
    }
}

export { UpdateClientNameBusiness }