import { Application } from "https://deno.land/x/oak/mod.ts";
import "./loaders/index.ts";
import { loadRoutes } from "./loaders/routes/index.ts";

const app = new Application();
loadRoutes(app);

console.log(`Server is running at ${5000}`);
await app.listen({ port: 5000 });
