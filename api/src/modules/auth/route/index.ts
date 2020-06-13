import { Router, Application } from "https://deno.land/x/oak/mod.ts";

const authRoute = (app: Application) => {
    const router = new Router();
    router
      .post("/auth/login", (context) => {
        context.response.body = "It's work!";
      })
      .post("/auth/register", (context) => {
        context.response.body = "It's work!";
      })
      .get("/auth/forgot-password", (context) => {
        context.response.body = "It's work!";
      })
      .post("/auth/change-password", (context) => {
        context.response.body = "It's work!";
      })
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