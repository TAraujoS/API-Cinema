import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUser.controller";
import listUserIdController from "../controllers/user/listUserId.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureUpdateMiddleware from "../middlewares/ensureUpdate.middleware";
import ensureIsEmployeeAdmMiddleware from "../middlewares/ensureIsEmployeeAdm.middleware";
import ensureIdUserMiddleware from "../middlewares/ensureIdUser.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsEmployeeAdmMiddleware,
  listUsersController
);
userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureIsEmployeeAdmMiddleware,
  listUserIdController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUpdateMiddleware,
  ensureIdUserMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware ,
  deleteUserController
);

export default userRoutes;
