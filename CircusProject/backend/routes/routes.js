import express from 'express';

import { getUser, createUser, updateUser, deleteUser, getUserById } from '../controllers/UserController.js';
import { getEvents, getEvent } from '../controllers/EventsController.js';


const router = express.Router();

// ------------------------ |Rutas para las peticiones de USERS| ------------------------

/*
// Rutas para hacer la petición de extraer.
router.get('/', getUser);
router.get('/:id', getUser);

// Rutas para hacer la petición de actualizar.
router.put('/:id', updateUser);

// Rutas para hacer la petición de eliminar.
router.delete('/:id', deleteUser);

// Rutas para hacer la petición de crear.
router.post('/', createUser);
*/

router.route('/').get(getUser).post(createUser);
router.route('/:id').put(updateUser).delete(deleteUser).get(getUserById);
 

// ------------------------ |Rutas para las peticiones de Eventos| ------------------------

router.get("/", getEvents);
router.get("/:id",getEvent);


// ------------------------ |Rutas para las peticiones de Ordenes de compra| ------------------------

export default router;