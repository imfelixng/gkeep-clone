import { Application } from "https://deno.land/x/oak/mod.ts";
import { authRoute } from "../../modules/auth/route/index.ts";

const loadRoutes = (app: Application) => {
    authRoute(app);
};

export {
    loadRoutes
};