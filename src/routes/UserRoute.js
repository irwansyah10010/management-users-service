import express from "express"

import UserController from "../controller/UserController.js"

const routerUser = express.Router()
const userController = new UserController

routerUser.get('/', userController.getAll)
routerUser.get('/:accountNumber/accountNumber', userController.getByAccountNumber)
routerUser.get('/:identityNumber/identityNumber', userController.getByIdentityNumber)
routerUser.get('/:id/id', userController.getById)

routerUser.post('/',userController.save)
routerUser.put("/:id",userController.update)
routerUser.delete("/:id",userController.delete)

export default routerUser