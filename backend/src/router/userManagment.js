import express from "express"
const router = express.Router()
import { getAllUser , createUser ,updateUser , deleteUser} from "../controller/user.controller.js"

router.get('/', getAllUser)

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete("/:id" , deleteUser)
export default router