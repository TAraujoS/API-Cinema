import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUser.controller";
import listUserIdController from "../controllers/user/listUserId.controller";
import updateUserController from "../controllers/user/updateUser.controller";


const userRoutes = Router()

userRoutes.post("", createUserController)
userRoutes.get("", listUsersController)
userRoutes.get("/:id", listUserIdController)
userRoutes.patch("/:id", updateUserController)
userRoutes.delete("/:id", deleteUserController)


export default userRoutes