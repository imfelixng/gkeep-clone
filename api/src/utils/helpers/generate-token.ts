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

const generateToken = (
  dataPayload: any,
  expiryTime: number,
  secretKey: string
) => {
  const expTime = new Date().getTime() + expiryTime;
  const payload: Payload = {
    iss: "joe",
    exp: setExpiration(expTime),
    ...dataPayload,
  };
  const generated = makeJwt({ header, payload, key: secretKey });
  return generated;
};

const verifyToken = async (token: string, secretKey: string) => {
  const jwtValidated: any = await validateJwt(token, secretKey);
  return {
    isValid: jwtValidated.isValid,
    payload: jwtValidated.payload,
  };
};

export { generateToken, verifyToken };
