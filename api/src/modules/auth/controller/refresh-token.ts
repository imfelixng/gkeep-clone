import { Context } from "https://deno.land/x/oak/mod.ts";
import { refreshTokenService } from "../service/index.ts";

const refreshTokenController = async (context: Context) => {
  try {
    const userData = context.state;

    const access_token = await refreshTokenService({ _id: userData?._id, email: userData?.email });

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

export { refreshTokenController };
