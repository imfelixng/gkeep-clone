import { Context } from "https://deno.land/x/oak/mod.ts";
import { getLabelService } from "../service/index.ts";

const getLabelController = async (context: Context) => {
  try {
    const result = await getLabelService({});

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

export { getLabelController };
