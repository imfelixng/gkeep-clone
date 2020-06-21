import { Label } from "../../../config/db/mongo/index.ts";

const createLabelRepository = async (data: any) => {
  return Label!.insertOne(data);
};

export { createLabelRepository };