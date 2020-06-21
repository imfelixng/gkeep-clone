import { Label } from "../../../config/db/mongo/index.ts";

const createLabelRepository = async (data: any) => {
  return Label!.insertOne(data);
};

const updateLabelRepository = async (filter: any, data: any) => {
  return Label!.updateOne(filter, { $set: data });
};

const getLabelRepository = async (filter: any) => {
  return Label!.find(filter);
};

const deleteLabelRepository = async (filter: any) => {
  return Label!.deleteOne(filter);
};


export {
  createLabelRepository,
  updateLabelRepository,
  getLabelRepository,
  deleteLabelRepository,
};