import { Context } from "https://deno.land/x/oak/mod.ts";
import { createLabelSerivce } from "../service/index.ts";

const createLabelController = async (context: Context) => {
  const { userData } = context.state;
  try {
    const bodyResult = await context.request.body({ asReader: false });
    const bodyData = bodyResult?.value;
    const { _id } = await createLabelSerivce(userData, bodyData);

    const dataResponse = {
      _id,
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

export { createLabelController };
