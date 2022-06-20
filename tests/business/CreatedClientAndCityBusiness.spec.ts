import { CreatedClientAndCityBusiness } from "@business/CreatedClientAndCityBusiness"
import {
    mockCreateUser,
    mockCreateCity
} from '../mocks/business/BusinessCreateMock'

const createClientBusiness = new CreatedClientAndCityBusiness();

describe('Create Business', () => {
    describe('Create Client', () => {
        it('Create client in db', async () => {
            createClientBusiness.createClient = jest.fn(() =>
            Promise.resolve(mockCreateUser))

            const users = await createClientBusiness.createClient(mockCreateUser)
            expect(users).toHaveProperty('id')
            expect(users).toHaveProperty('name')
            expect(users).toHaveProperty('sexo')
            expect(users).toHaveProperty('dateNasc')
            expect(users).toHaveProperty('age')
            expect(users).toHaveProperty('city')
        })
    })

    describe('Create City', () => {
        it('Create city in db', async () => {
            createClientBusiness.createCity = jest.fn(() =>
            Promise.resolve(mockCreateCity))

            const users = await createClientBusiness.createCity(mockCreateCity)
            expect(users).toHaveProperty('id')
            expect(users).toHaveProperty('name')
            expect(users).toHaveProperty('uf')
        })
    })
})