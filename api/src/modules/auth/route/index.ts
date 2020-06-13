import { Router, Application } from "https://deno.land/x/oak/mod.ts";
import {
  registerController,
  loginController,
  changePasswordController,
} from "../controller/index.ts";

const authRoute = (app: Application) => {
    const router = new Router();
    router
      .post("/auth/login", loginController)
      .post("/auth/register", registerController)
      .get("/auth/forgot-password", (context) => {
        context.response.body = "It's work!";
      })
      .post("/auth/change-password", changePasswordController)
      .get("/auth/revoke-token", (context) => {
        context.response.body = "It's work!";
      })
      .get("/auth/refresh-token", (context) => {
        context.response.body = "It's work!";
      })
      .get("/auth/force-logout", (context) => {
        context.response.body = "It's work!";
      })
      .get("/auth/user", (context) => {
        context.response.body = "It's work!";
      });
    
    app.use(router.routes());
    app.use(router.allowedMethods());
};

export {
    authRoute
};