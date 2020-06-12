import { Router, Application } from "https://deno.land/x/oak/mod.ts";

const authRoute = (app: Application) => {
    const router = new Router();
    router
        .get("/auth/user", (context) => {
            context.response.body = 'It\'s work!'
        });
    
    app.use(router.routes());
    app.use(router.allowedMethods());
};

export {
    authRoute
};