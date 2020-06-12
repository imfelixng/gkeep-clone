import { Application } from "https://deno.land/x/oak/mod.ts";
import "./loaders/index.ts";
import { loadRoutes } from "./loaders/routes/index.ts";
import { APP_PORT } from "./config/env/index.ts";

const app = new Application();
loadRoutes(app);

console.log(`Server is running at ${APP_PORT}`);
await app.listen({ port: APP_PORT });
