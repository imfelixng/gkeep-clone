import { User } from "../../../config/db/mongo/index.ts";

const updateUserRepository = async (filter: any, data: any) => {
  return User!.updateOne(filter, { $set: data });
};

export { updateUserRepository };