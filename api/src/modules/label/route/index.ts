import { Router, Application } from "https://deno.land/x/oak/mod.ts";
import {
  createLabelController,
  updateLabelController,
  deleteLabelController,
} from "../controller/index.ts";
import {
  authAccessMiddleware,
} from "../../../middlewares/is-auth.ts";
import { getLabelController } from "../controller/get-label.ts";

const labelRoute = (app: Application) => {
  const router = new Router();
  router
    .get("/labels", authAccessMiddleware, getLabelController)
    .post("/labels", authAccessMiddleware, createLabelController)
    .patch("/labels/:labelId", authAccessMiddleware, updateLabelController)
    .delete("/labels/:labelId", authAccessMiddleware, deleteLabelController);

  app.use(router.routes());
  app.use(router.allowedMethods());
};

export { labelRoute };
