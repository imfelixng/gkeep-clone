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

export { IRegisterData, ILoginData, IChangePasswordData };