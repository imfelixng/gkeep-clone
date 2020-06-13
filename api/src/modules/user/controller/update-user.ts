import { Context } from "https://deno.land/x/oak/mod.ts";
import { updateUserService } from "../service/index.ts";

const updateUserController = async (context: Context) => {
  const { userData } = context.state;
  try {
    const bodyResult = await context.request.body({ asReader: false });
    const bodyData = bodyResult?.value;
    await updateUserService(
      {
        email: userData.email,
      },
      bodyData
    );

    const dataResponse = {
      _id: userData._id,
      ...bodyData,
    };
    context.response.body = dataResponse;
  } catch (err) {
    context.response.status = 400;
    context.response.body = {
      error: err.message,
    };
  }
};

export { updateUserController };
