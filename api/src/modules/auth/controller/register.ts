import { Context } from "https://deno.land/x/oak/mod.ts";
import { createAccountService } from "../service/index.ts";

export const registerController = async (context: Context) => {
    try {
        const bodyResult = await context.request.body({ asReader: false });
        const bodyData = bodyResult?.value;
        const { _id, accessToken } = await createAccountService(bodyData);
        const dataResponse = {
          _id,
          ...bodyData,
          access_token: accessToken,
        };
        delete dataResponse.password;
        context.response.body = dataResponse;
    } catch (err) {
        context.response.status = 400;
        context.response.body = {
            error: err.message,
        };
    }
};