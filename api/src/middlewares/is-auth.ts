import { Middleware, Context } from "https://deno.land/x/oak/mod.ts";
import { verifyToken } from "../utils/helpers/generate-token.ts";
import {
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
} from "../config/env/index.ts";

const authRefreshMiddleware: Middleware = async (context: Context, next) => {
  const tokenFromHeader = context.cookies.get("refresh_token") || "";
  const { isValid, payload } = await verifyToken(
    tokenFromHeader,
    REFRESH_TOKEN_SECRET_KEY
  );
  if (!isValid) {
    context.response.status = 401;
    context.response.body = {
      error: "Token is invalid",
    };
    return;
  }

  context.state = {
    userData: payload,
  };

  await next();
};

const authAccessMiddleware: Middleware = async (context: Context, next) => {
  const authorizationFromHeader = context.request.headers.get("Authorization");
  const [, tokenFromHeader] = authorizationFromHeader?.split(" ") || [];
  const { isValid, payload } = await verifyToken(
    tokenFromHeader || '',
    ACCESS_TOKEN_SECRET_KEY
  );
  if (!isValid) {
    context.response.status = 401;
    context.response.body = {
      error: "Token is invalid",
    };
    return;
  }

  context.state = {
    userData: payload,
  };

  await next();
};

export { authAccessMiddleware, authRefreshMiddleware };
