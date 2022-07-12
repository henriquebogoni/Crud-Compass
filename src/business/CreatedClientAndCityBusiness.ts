import { ICity } from '@interfaces/ICitys'
import { IClient } from '@interfaces/IClient'

import { prismaClient } from '../prismadb/prismaConnect'
import { generateId } from '@utils/GenerateID';

class CreatedClientAndCityBusiness {
    async createCity(city: ICity) {
        return await prismaClient.city.create({
            data: {
                id: generateId(),
                name: city.name,
                uf: city.uf
            }
        })
    }

    async createClient(client: IClient) {
        return await prismaClient.client.create({
            data: {
                id: generateId(),
                name: client.name,
                sexo: client.sexo,
                dateNasc: client.dateNasc,
                age: client.age,
                city: client.city
            }
        })
    }
}

export { CreatedClientAndCityBusiness }