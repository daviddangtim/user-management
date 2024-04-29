import express from 'express'


const router = express.Router();

import customController from '../controllers/controller.js'

 const {homePage,addGet,addPost} = customController;

 router.get('/',homePage);
 router.get('/add',addGet);
 router.post('/add',addPost);

 export default router;