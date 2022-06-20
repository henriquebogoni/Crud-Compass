import { Router } from 'express'

import { createClientValidate } from '@middlewares/ValidatorClient'
import { createCityValidate } from '@middlewares/ValidatorCity'


import { CreatedClientAndCityController } from '@controller/CreatedClientAndCityController';
import { FindClientAndCityController } from '@controller/FindClientAndCityController';
import { DeleteClientController } from '@controller/DeleteClientController';
import { UpdateClientNameController } from '@controller/UpdateClientNameController';

const router = Router()

const createdClientAndCityController = new CreatedClientAndCityController()
const findClientAndCityController = new FindClientAndCityController()
const deleteClientController = new DeleteClientController()
const updateClientNameController = new UpdateClientNameController()

router.post(
    '/createdCity',
    createCityValidate,
    createdClientAndCityController.createCity
);
router.get(
    '/city/:name',
    findClientAndCityController.findCityName
)
router.get(
    '/state/:uf',
    findClientAndCityController.findCityUF
)

router.post(
    '/createdClient',
    createClientValidate,
    createdClientAndCityController.createClient
);
router.get(
    '/clientId/:id',
    findClientAndCityController.findClientId
)
router.get(
    '/clientName/:name',
    findClientAndCityController.findClientName
)

router.delete(
    '/deleteClient',
    deleteClientController.deleteClient
)

router.put(
    '/updateClient/?:id',
    updateClientNameController.updateNameClient
)

export default router;