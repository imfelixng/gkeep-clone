import { Context } from "https://deno.land/x/oak/mod.ts";
import { changePasswordService } from "../service/index.ts";

const changePasswordController = async (context: Context) => {
  try {
    const bodyResult = await context.request.body({ asReader: false });
    const bodyData = {
      email: bodyResult.value.email,
      currentPassword: bodyResult.value.current_password,
      nextPassword: bodyResult.value.next_password,
    };
    const { _id } = await changePasswordService(
      bodyData
    );

    const dataResponse = {
      _id,
    };
    context.response.body = dataResponse;
  } catch (err) {
    context.response.status = 400;
    context.response.body = {
      error: err.message,
    };
  }
};

export { changePasswordController };
