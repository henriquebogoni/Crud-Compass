import { Router } from 'express'

import { validateCityJOI } from '@middlewares/ValidatorCityJOI'
import { validateClientJOI } from '@middlewares/ValidatorClientJOI'
import { validateCityJOIFind } from '@middlewares/ValidatorCityJoiFind'
import { validateClientJOIFind } from '@middlewares/ValidatorClientJoiFind'


import { CreatedClientAndCityController } from '@controller/CreatedClientAndCityController';
import { FindClientAndCityController } from '@controller/FindClientAndCityController';
import { DeleteClientController } from '@controller/DeleteClientController';
import { UpdateClientNameController } from '@controller/UpdateClientNameController';

const router = Router()

const createdClientAndCityController = new CreatedClientAndCityController()
const findClientAndCityController = new FindClientAndCityController()
const deleteClientController = new DeleteClientController()
const updateClientNameController = new UpdateClientNameController()

router.post('/createdCity', validateCityJOI, createdClientAndCityController.createCity);
router.get('/city', validateCityJOIFind, findClientAndCityController.findCity)

router.post('/createdClient', validateClientJOI, createdClientAndCityController.createClient);
router.get('/client', validateClientJOIFind, findClientAndCityController.findClient)

router.delete('/deleteClient/:name', deleteClientController.deleteClient)

router.put('/updateClient', updateClientNameController.updateClient)

export default router;