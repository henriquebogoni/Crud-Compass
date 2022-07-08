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

router.post('/createdCity',createCityValidate, createdClientAndCityController.createCity);
router.get('/city', findClientAndCityController.findCity)

router.post('/createdClient', createClientValidate, createdClientAndCityController.createClient);
router.get('/client', findClientAndCityController.findClient)

router.delete('/deleteClient/:name', deleteClientController.deleteClient)

router.put('/updateClient', updateClientNameController.updateClient)

export default router;