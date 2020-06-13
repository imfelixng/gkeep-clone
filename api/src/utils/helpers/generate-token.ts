import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import {
  makeJwt,
  setExpiration,
  Jose,
  Payload,
} from "https://deno.land/x/djwt/create.ts";

const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

const generateToken = (dataPayload: any, expiryTime: number, secretKey: string) => {
    const payload: Payload = {
      iss: "joe",
      exp: setExpiration(new Date().getTime() + expiryTime),
      ...dataPayload,
    };
    const generated = makeJwt({ header, payload, key: secretKey });
    return generated;
};

const verifyToken = async (token: string, secretKey: string) => {
  const { isValid } = await validateJwt(token, secretKey);
  return isValid;
};

export { generateToken, verifyToken };