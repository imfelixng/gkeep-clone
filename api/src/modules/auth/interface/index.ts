interface IRegisterData {
    email: string,
    password: string,
    refresh_token?: string,
}

interface ILoginData {
    email: string,
    password: string,
}

interface IChangePasswordData {
    email: string,
    currentPassword: string,
    nextPassword: string
}

interface IRefreshTokenData {
    _id: string,
    email: string,
}

interface IRevokeTokenData {
    _id: string,
    email: string,
}

export {
  IRegisterData,
  ILoginData,
  IChangePasswordData,
  IRefreshTokenData,
  IRevokeTokenData,
};