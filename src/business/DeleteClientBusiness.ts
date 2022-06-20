import { IClient } from '@interfaces/IClient';
import { prismaClient } from '../prismadb/prismaConnect'

class DeleteClientBusiness {
    async deleteClient(client: IClient) {
        return await prismaClient.client.deleteMany({
            where: {
               name: client.name
            }
        })
    }
}

export { DeleteClientBusiness };