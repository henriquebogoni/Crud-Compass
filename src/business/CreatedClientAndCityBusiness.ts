import { ICity } from '@interfaces/ICitys'
import { IClient } from '@interfaces/IClient'
import { prismaClient } from '../prismadb/prismaConnect'
import { generateId } from '@utils/GenerateID';
const isValidBirthdate = require('is-valid-birthdate')


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

        const result = await prismaClient.client.create({
            data: {
                id: generateId(),
                name: client.name,
                sexo: client.sexo,
                dateNasc: client.dateNasc,
                city: client.city
            }
        })

        if(isValidBirthdate(client.dateNasc) === true){
            return result
        } else{
            return {message: 'Data inválida, essa pessoa ainda não nasceu'}
        }
    }
}

export { CreatedClientAndCityBusiness }