import Router from "Router"
import { registerUser } from "../controllers/user.controller"

const router = Router()
router.route("/register").post(registerUser)

export default router