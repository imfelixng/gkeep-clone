import { config } from "https://deno.land/x/dotenv/mod.ts";

const envObj = config();;

export const APP_PORT = +envObj.APP_PORT;
export const MONGO_URL = envObj.MONGO_URL;
export const MONGO_DB_NAME = envObj.MONGO_DB_NAME;
export const ACCESS_TOKEN_SECRET_KEY = envObj.ACCESS_TOKEN_SECRET_KEY;