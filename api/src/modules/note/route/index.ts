import { Router, Application } from "https://deno.land/x/oak/mod.ts";
import {
  createNoteController,
  updateNoteController,
  deleteNoteController,
  getNoteController,
} from "../controller/index.ts";
import {
  authAccessMiddleware,
} from "../../../middlewares/is-auth.ts";

const noteRoute = (app: Application) => {
  const router = new Router();
  router
    .get("/notes", authAccessMiddleware, getNoteController)
    .post("/notes", authAccessMiddleware, createNoteController)
    .patch("/notes/:noteId", authAccessMiddleware, updateNoteController)
    .delete("/notes/:noteId", authAccessMiddleware, deleteNoteController);

  app.use(router.routes());
  app.use(router.allowedMethods());
};

export { noteRoute };
