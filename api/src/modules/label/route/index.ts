import { Router, Application } from "https://deno.land/x/oak/mod.ts";
import {
  createLabelController,
} from "../controller/index.ts";
import {
  authAccessMiddleware,
} from "../../../middlewares/is-auth.ts";

const labelRoute = (app: Application) => {
  const router = new Router();
  router
    .post("/label", authAccessMiddleware, createLabelController)

  app.use(router.routes());
  app.use(router.allowedMethods());
};

export { labelRoute };
