import {prismaClient} from '../prismadb/prismaConnect'

class FindClientAndCityBusiness {
    async findClientId(client: any) {
        return await prismaClient.client.findFirst({
            where: {
                id: client.id
            }
        })
    }

    async findClientName(client: any) {
        return await prismaClient.client.findFirst({
            where: {
                name: client.name
            }
        })
    }

    async findCityUF(city: any) {
        return await prismaClient.city.findMany({
            where: {
                uf: city.uf
            }
        })
    }

    async findCityName(city: any) {
        return await prismaClient.city.findMany({
            where: {
                name: city.name
            }
        })
    }
}

export { FindClientAndCityBusiness };