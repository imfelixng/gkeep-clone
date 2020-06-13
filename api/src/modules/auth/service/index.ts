import { IAccountDTO } from "../interface/account.dto.ts";
import {
  createAccountRepository,
  checkAccountExistRepository,
  updateAccountRepository,
} from "../repository/index.ts";
import { hashPassword } from "../../../utils/helpers/generate-password.ts";
import { generateToken } from "../../../utils/helpers/generate-token.ts";
import {
  REFRESH_TOKEN_LIFE,
  REFRESH_TOKEN_SECRET_KEY,
  ACCESS_TOKEN_LIFE,
  ACCESS_TOKEN_SECRET_KEY,
} from "../../../config/env/index.ts";

const createAccountService = async (dataDTO: IAccountDTO) => {
    const { email, password } = dataDTO;
  const isAccountExistWithEmail = await checkAccountExistRepository({
    email,
  });

  if (isAccountExistWithEmail) {
    throw new Error("Email is exist!");
  }

  const hashedPassword = await hashPassword(password);
  const data = {
    email,
    password: hashedPassword,
  };

  const dataResponse = await createAccountRepository(data);
  const _id = dataResponse["$oid"];

  const tokenPayload = {
    _id,
    email,
  };

  const refreshToken = await generateToken(
    tokenPayload,
    +REFRESH_TOKEN_LIFE,
    REFRESH_TOKEN_SECRET_KEY
  );
  const accessToken = await generateToken(
    tokenPayload,
    +ACCESS_TOKEN_LIFE,
    ACCESS_TOKEN_SECRET_KEY
  );

  await updateAccountRepository(
    { email },
    { refresh_token: refreshToken }
  );

  return {
    _id,
    refreshToken,
    accessToken,
  };
};

export { createAccountService };
