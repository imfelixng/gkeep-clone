import { Context, helpers } from "https://deno.land/x/oak/mod.ts";
import { updateLabelService } from "../service/index.ts";

const updateLabelController = async (context: Context) => {
  try {
    const { labelId } = helpers.getQuery(context, { mergeParams: true }) || {}; 
    const bodyResult = await context.request.body({ asReader: false });
    const bodyData = bodyResult?.value;
    await updateLabelService(
      {
        _id: {
          $oid: labelId,
        },
      },
      bodyData
    );

    const dataResponse = {
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

export { updateLabelController };
