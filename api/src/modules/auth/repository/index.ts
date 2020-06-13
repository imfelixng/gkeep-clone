import { IAccountDTO } from "../interface/account.dto.ts";
import { Account } from "../../../config/db/mongo/index.ts";

const createAccountRepository = async (data: IAccountDTO) => {
  return Account!.insertOne(data);
};

const updateAccountRepository = async (filter: any, data: any) => {
      return Account!.updateOne(filter, { $set: data });
};

const checkAccountExistRepository = async (filter: any) => {
  return Account!.findOne(filter);
};

export {
  createAccountRepository,
  checkAccountExistRepository,
  updateAccountRepository,
};
