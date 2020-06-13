import { config } from "https://deno.land/x/dotenv/mod.ts";

const envObj = config();;

export const APP_PORT = +envObj.APP_PORT;
export const MONGO_URL = envObj.MONGO_URL;
export const MONGO_DB_NAME = envObj.MONGO_DB_NAME;
export const REDIS_HOST = envObj.REDIS_HOST;
export const REDIS_PORT = envObj.REDIS_PORT;
export const ACCESS_TOKEN_SECRET_KEY = envObj.ACCESS_TOKEN_SECRET_KEY;
export const REFRESH_TOKEN_SECRET_KEY = envObj.REFRESH_TOKEN_SECRET_KEY;
export const ACCESS_TOKEN_LIFE = envObj.ACCESS_TOKEN_LIFE;
export const REFRESH_TOKEN_LIFE = envObj.REFRESH_TOKEN_LIFE;