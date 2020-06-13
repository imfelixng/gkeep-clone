import { Account } from "../../../config/db/mongo/index.ts";
import { redis } from "../../../config/db/redis/index.ts";
import { IRegisterData } from "../interface/index.ts";

const createAccountRepository = async (data: IRegisterData) => {
  return Account!.insertOne(data);
};

const updateAccountRepository = async (filter: any, data: any) => {
      return Account!.updateOne(filter, { $set: data });
};

const checkAccountExistRepository = async (filter: any) => {
  return Account!.findOne(filter);
};

const saveAccessTokenToRedisDB = (accessToken: string) => {
  redis.lpush("access_token_list", accessToken);
};

export {
  createAccountRepository,
  checkAccountExistRepository,
  updateAccountRepository,
  saveAccessTokenToRedisDB,
};
