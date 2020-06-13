import { Context } from "https://deno.land/x/oak/mod.ts";
import { revokeTokenService } from "../service/index.ts";

const revokeTokenController = async (context: Context) => {
  try {
    const userData = context.state;

    const {
      accessToken: access_token,
      refreshToken: refresh_token,
    } = await revokeTokenService({
      _id: userData?._id,
      email: userData?.email,
    });

    context.cookies.set("refresh_token", refresh_token, { httpOnly: true });

    const dataResponse = {
      _id: userData?._id,
      access_token,
      refresh_token,
    };
    context.response.body = dataResponse;
  } catch (err) {
    context.response.status = 400;
    context.response.body = {
      error: err.message,
    };
  }
};

export { revokeTokenController };
