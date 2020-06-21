import { Label } from "../../../config/db/mongo/index.ts";

const createLabelRepository = async (data: any) => {
  return Label!.insertOne(data);
};

const updateLabelRepository = async (filter: any, data: any) => {
  return Label!.updateOne(filter, { $set: data });
};

export { createLabelRepository, updateLabelRepository };