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
            findClientAndCityBusiness.findClientId = jest.fn(() =>
            Promise.resolve(mockFindClientId))

            const users = await findClientAndCityBusiness.findClientId('62a8cf3677ec430408899353')
            expect(users).toEqual(mockFindClientId)
        })
    })

    describe('Find client name', () => {
        it('Find client name in db', async () => {
            findClientAndCityBusiness.findClientName = jest.fn(() =>
            Promise.resolve(mockFindClientName))

            const users = await findClientAndCityBusiness.findClientName('dirceu')
            expect(users).toEqual(mockFindClientName)
        })
    })

    describe('Find city uf', () => {
        it('Find city uf in db', async () => {
            findClientAndCityBusiness.findCityUF = jest.fn(() =>
            Promise.resolve(mockFindCityUf))

            const users = await findClientAndCityBusiness.findCityUF('RS')
            expect(users).toEqual(mockFindCityUf)
        })
    })

    describe('Find city name', () => {
        it('Find city name in db', async () => {
            findClientAndCityBusiness.findCityName = jest.fn(() =>
            Promise.resolve(mockFindCityName))

            const users = await findClientAndCityBusiness.findCityName('sao paulo')
            expect(users).toEqual(mockFindCityName)
        })
    })
})