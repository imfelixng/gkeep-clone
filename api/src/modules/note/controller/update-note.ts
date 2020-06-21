import { Context, helpers } from "https://deno.land/x/oak/mod.ts";
import { updateNoteService } from "../service/index.ts";

const updateNoteController = async (context: Context) => {
  try {
    const { noteId } = helpers.getQuery(context, { mergeParams: true }) || {}; 
    const bodyResult = await context.request.body({ asReader: false });
    const bodyData = bodyResult?.value;
    await updateNoteService(
      {
        _id: {
          $oid: noteId,
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

export { updateNoteController };
