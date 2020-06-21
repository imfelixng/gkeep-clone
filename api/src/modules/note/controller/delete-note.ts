import { Context, helpers } from "https://deno.land/x/oak/mod.ts";
import { deleteNoteService } from "../service/index.ts";

const deleteNoteController = async (context: Context) => {
  try {
    const { noteId } = helpers.getQuery(context, { mergeParams: true }) || {};
    await deleteNoteService(
      {
        _id: {
          $oid: noteId,
        },
      }
    );

    const dataResponse = {
      _id: noteId,
    };
    context.response.body = dataResponse;
  } catch (err) {
    context.response.status = 400;
    context.response.body = {
      error: err.message,
    };
  }
};

export { deleteNoteController };
