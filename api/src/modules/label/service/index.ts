import {
  createLabelRepository,
  updateLabelRepository,
  getLabelRepository,
} from "../repository/index.ts";

const createLabelSerivce = async (creator: any, data: any) => {
    const labelCreated = await createLabelRepository({
      ...data,
      _creator: creator._id,
      _createdAt: new Date().toISOString(),
      _updatedAt: new Date().toISOString(),
    });
    return {
      _id: labelCreated['$oid'],
    };
};

const updateLabelService = (filter: any, data: any) => {
  return updateLabelRepository(filter, data);
};

const getLabelService = (filter: any) => {
  return getLabelRepository(filter);
};

export { createLabelSerivce, updateLabelService, getLabelService };