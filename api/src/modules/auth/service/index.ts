import {
  createAccountRepository,
  checkAccountExistRepository,
  updateAccountRepository,
  saveAccessTokenToRedisDB,
  createUserRepository,
} from "../repository/index.ts";
import {
  hashPassword,
  comparePassword,
} from "../../../utils/helpers/generate-password.ts";
import { generateToken } from "../../../utils/helpers/generate-token.ts";
import {
  REFRESH_TOKEN_LIFE,
  REFRESH_TOKEN_SECRET_KEY,
  ACCESS_TOKEN_LIFE,
  ACCESS_TOKEN_SECRET_KEY,
} from "../../../config/env/index.ts";
import {
  IRegisterData,
  ILoginData,
  IChangePasswordData,
  IRefreshTokenData,
  IRevokeTokenData,
} from "../interface/index.ts";

const createAccountService = async (data: IRegisterData) => {
  const { email, password, full_name } = data;
  const isAccountExistWithEmail = await checkAccountExistRepository({
    email,
  });

  if (isAccountExistWithEmail) {
    throw new Error("Email is exist!");
  }

  const hashedPassword = await hashPassword(password);
  const accountCreated = {
    email,
    password: hashedPassword,
  };

  const accountResponse = await createAccountRepository(accountCreated);
  const accountId = accountResponse["$oid"];

  const userCreated = {
    email,
    full_name,
    account_id: accountId,
  };

  await createUserRepository(userCreated);

  const tokenPayload = {
    _id: accountId,
    email,
  };

  const refreshToken = generateToken(
    tokenPayload,
    +REFRESH_TOKEN_LIFE,
    REFRESH_TOKEN_SECRET_KEY
  );
  const accessToken = generateToken(
    tokenPayload,
    +ACCESS_TOKEN_LIFE,
    ACCESS_TOKEN_SECRET_KEY
  );

  await updateAccountRepository({ email }, { refresh_token: refreshToken });
  saveAccessTokenToRedisDB(accessToken);

  return {
    _id: accountId,
    refreshToken,
    accessToken,
  };
};

const loginAccountService = async (data: ILoginData) => {
  const { email, password } = data;
  const isAccountExistWithEmail: any = await checkAccountExistRepository({
    email,
  });

  if (!isAccountExistWithEmail) {
    throw new Error("Email or password is invalid!");
  }

  const { password: passwordStored, _id: dbIdObj } = isAccountExistWithEmail;
  const isMatched = await comparePassword(password, passwordStored);

  if (!isMatched) {
    throw new Error("Email or password is invalid!");
  }
  const _id = dbIdObj["$oid"];
  const tokenPayload = {
    _id,
    email,
  };

  const refreshToken = generateToken(
    tokenPayload,
    +REFRESH_TOKEN_LIFE,
    REFRESH_TOKEN_SECRET_KEY
  );
  const accessToken = generateToken(
    tokenPayload,
    +ACCESS_TOKEN_LIFE,
    ACCESS_TOKEN_SECRET_KEY
  );

  await updateAccountRepository({ email }, { refresh_token: refreshToken });
  saveAccessTokenToRedisDB(accessToken);
  return {
    _id,
    refreshToken,
    accessToken,
  };
};

const changePasswordService = async (data: IChangePasswordData) => {
  const { email, currentPassword, nextPassword } = data;
  const isAccountExistWithEmail = await checkAccountExistRepository({
    email,
  });

  if (!isAccountExistWithEmail) {
    throw new Error("Account not found!");
  }

  const { _id: dbIdObj, password: passwordStored } = isAccountExistWithEmail as any;

  const isMatch = await comparePassword(currentPassword, passwordStored);

  if (!isMatch) {
    throw new Error("Password is invalid!");
  }

  const hashedPassword = await hashPassword(nextPassword);

  const dataUpdated = {
    password: hashedPassword,
  };

  await updateAccountRepository({ email }, dataUpdated);

  return {
    _id: dbIdObj["$oid"],
  };
};

const refreshTokenService = async (data: IRefreshTokenData) => {
  const accessToken = generateToken(
    data,
    +ACCESS_TOKEN_LIFE,
    ACCESS_TOKEN_SECRET_KEY
  );
  return { accessToken };
};

const revokeTokenService = async (data: IRevokeTokenData) => {
  const { email } = data;
  const accessToken = generateToken(
    data,
    +ACCESS_TOKEN_LIFE,
    ACCESS_TOKEN_SECRET_KEY
  );
  const refreshToken = generateToken(
    data,
    +REFRESH_TOKEN_LIFE,
    REFRESH_TOKEN_SECRET_KEY
  );

  await updateAccountRepository({ email }, { refresh_token: refreshToken });

  return { accessToken, refreshToken };
};

const forceLogoutService = async (data: IRevokeTokenData) => {
  // Delete access_token in redis
  const accessToken = generateToken(
    data,
    +ACCESS_TOKEN_LIFE,
    ACCESS_TOKEN_SECRET_KEY
  );

  return { accessToken };
};

export {
  createAccountService,
  loginAccountService,
  changePasswordService,
  refreshTokenService,
  revokeTokenService,
  forceLogoutService,
};
