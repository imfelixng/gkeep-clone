import { Context } from "https://deno.land/x/oak/mod.ts";
import { loginAccountService } from "../service/index.ts";

const loginController = async(context: Context) => {
try {
  const bodyResult = await context.request.body({ asReader: false });
  const bodyData = bodyResult?.value;
  const { _id, accessToken, refreshToken } = await loginAccountService(
    bodyData
  );

  context.cookies.set("refresh_token", refreshToken, { httpOnly: true });

  const dataResponse = {
    _id,
    ...bodyData,
    access_token: accessToken,
    refresh_token: refreshToken,
  };
  delete dataResponse.password;
  context.response.body = dataResponse;
} catch (err) {
  context.response.status = 400;
  context.response.body = {
    error: err.message,
  };
}
}

export {
    loginController
}