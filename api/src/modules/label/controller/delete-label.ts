import { Context, helpers } from "https://deno.land/x/oak/mod.ts";
import { updateLabelService, deleteLabelService } from "../service/index.ts";

const deleteLabelController = async (context: Context) => {
  try {
    const { labelId } = helpers.getQuery(context, { mergeParams: true }) || {};
    await deleteLabelService(
      {
        _id: {
          $oid: labelId,
        },
      }
    );

    const dataResponse = {
      _id: labelId,
    };
    context.response.body = dataResponse;
  } catch (err) {
    context.response.status = 400;
    context.response.body = {
      error: err.message,
    };
  }
};

export { deleteLabelController };
