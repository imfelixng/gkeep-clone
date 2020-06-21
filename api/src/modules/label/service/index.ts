import { createLabelRepository } from "../repository/index.ts";

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

export {
    createLabelSerivce
}