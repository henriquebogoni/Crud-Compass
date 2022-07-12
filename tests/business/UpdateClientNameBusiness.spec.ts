import { UpdateClientNameBusiness } from "@business/UpdateClientNameBusiness"
import {
    mockUpdateClient,
} from '../mocks/business/BusinessUpdateMock'

const updateClientNameBusiness = new UpdateClientNameBusiness();

describe('Create Business', () => {
    describe('Create Client', () => {
        it('Create client in db', async () => {
            updateClientNameBusiness.updateClient = jest.fn(() =>
            Promise.resolve(mockUpdateClient))

            const users = await updateClientNameBusiness.updateClient({name: 'claudio'})
            expect(users).toEqual(mockUpdateClient)
        })
    })
})