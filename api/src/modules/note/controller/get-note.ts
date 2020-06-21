import { Context, helpers } from "https://deno.land/x/oak/mod.ts";
import { getNoteService } from "../service/index.ts";

const getNoteController = async (context: Context) => {
  try {
    const { where } = helpers.getQuery(context, { mergeParams: true }) || {}; 
    const result = await getNoteService(where || {});

    const data = result?.map((item: any) => ({ ...item, _id: item._id['$oid'] })) || [];

    const dataResponse = {
      data: data,
    };
    context.response.body = dataResponse;
  } catch (err) {
    context.response.status = 200;
    context.response.body = {
      data: [],
    };
  }
};

export { getNoteController };
