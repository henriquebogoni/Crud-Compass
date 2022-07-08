import {prismaClient} from '../prismadb/prismaConnect'
import {ICity} from '@interfaces/ICitys'
import {IClient} from '@interfaces/IClient'

class FindClientAndCityBusiness {
    async findClient(client: IClient) {
        return await prismaClient.client.findMany({
            where: {
                id: client.id,
                name: client.name
            }
        })
    }

    async findCity(city: ICity) {
        return await prismaClient.city.findMany({
            where: {
                name: city.name,
                uf: city.uf
            }
        })
    }
}

export { FindClientAndCityBusiness };