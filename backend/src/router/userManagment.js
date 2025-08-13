import express from "express"
const router = express.Router()
import { getAllUser , createUser ,updateUser , deleteUser ,getUserById} from "../controller/user.controller.js"

router.get('/', getAllUser)

router.get('/:id',getUserById)

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete("/:id" , deleteUser)
export default router