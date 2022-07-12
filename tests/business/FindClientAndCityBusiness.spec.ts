import { FindClientAndCityBusiness } from "@business/FindClientAndCityBusiness"
import {
    mockFindClientName, 
    mockFindClientId,
    mockFindCityUf,
    mockFindCityName
} from '../mocks/business/BusinessFindMock';

const findClientAndCityBusiness = new FindClientAndCityBusiness();

describe('Find Business', () => {
    describe('Find client id', () => {
        it('Find client id in db', async () => {
            findClientAndCityBusiness.findClient = jest.fn(() =>
            Promise.resolve(mockFindClientId))

            const users = await findClientAndCityBusiness.findClient({name: 'dirceu'})
            expect(users).toEqual(mockFindClientId)
        })
    })

    describe('Find client name', () => {
        it('Find client name in db', async () => {
            findClientAndCityBusiness.findClient = jest.fn(() =>
            Promise.resolve(mockFindClientName))

            const users = await findClientAndCityBusiness.findClient({name: 'dirceu'})
            expect(users).toEqual(mockFindClientName)
        })
    })

    describe('Find city uf', () => {
        it('Find city uf in db', async () => {
            findClientAndCityBusiness.findCity = jest.fn(() =>
            Promise.resolve(mockFindCityUf))

            const users = await findClientAndCityBusiness.findCity({uf: 'RS'})
            expect(users).toEqual(mockFindCityUf)
        })
    })

    describe('Find city name', () => {
        it('Find city name in db', async () => {
            findClientAndCityBusiness.findCity = jest.fn(() =>
            Promise.resolve(mockFindCityName))

            const users = await findClientAndCityBusiness.findCity({uf: 'RS'})
            expect(users).toEqual(mockFindCityName)
        })
    })
})