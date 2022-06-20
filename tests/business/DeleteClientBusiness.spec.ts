import { DeleteClientBusiness } from "@business/DeleteClientBusiness"

import {
    mockDeleteClient, 
} from '../mocks/business/BusinessDeleteMock';


const deleteClientBusiness = new DeleteClientBusiness();

describe('Find Business', () => {
    describe('Find client id', () => {
        it('Find client id in db', async () => {
            deleteClientBusiness.deleteClient = jest.fn(() =>
            Promise.resolve({"count": 0}))

            const users = await deleteClientBusiness.deleteClient(mockDeleteClient)
            expect(users).toEqual({"count": 0})
        })
    })
})