import { Router, Application } from "https://deno.land/x/oak/mod.ts";
import {
  updateUserController,
} from "../controller/index.ts";
import {
  authAccessMiddleware,
} from "../../../middlewares/is-auth.ts";

const userRoute = (app: Application) => {
  const router = new Router();
  router
    .patch("/user", authAccessMiddleware, updateUserController)

  app.use(router.routes());
  app.use(router.allowedMethods());
};

export { userRoute };
