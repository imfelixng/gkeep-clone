import { Application } from "https://deno.land/x/oak/mod.ts";
import { authRoute } from "../../modules/auth/route/index.ts";
import { userRoute } from "../../modules/user/route/index.ts";
import { labelRoute } from "../../modules/label/route/index.ts";
import { noteRoute } from "../../modules/note/route/index.ts";

const loadRoutes = (app: Application) => {
    authRoute(app);
    userRoute(app);
    labelRoute(app);
    noteRoute(app);
};

export {
    loadRoutes
};