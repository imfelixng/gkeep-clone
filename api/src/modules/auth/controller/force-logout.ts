import { Context } from "https://deno.land/x/oak/mod.ts";
import { forceLogoutService } from "../service/index.ts";

const forceLogoutController = async (context: Context) => {
  try {
    const userData = context.state;

    const { accessToken: access_token } = await forceLogoutService({
      _id: userData?._id,
      email: userData?.email,
    });

    const dataResponse = {
      _id: userData?._id,
      access_token,
    };
    context.response.body = dataResponse;
  } catch (err) {
    context.response.status = 400;
    context.response.body = {
      error: err.message,
    };
  }
};

export { forceLogoutController };
