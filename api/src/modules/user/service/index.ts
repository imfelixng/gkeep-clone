import { updateUserRepository } from "../repository/index.ts";

const updateUserService = (filter: any, data: any) => {
    return updateUserRepository(filter, data);
};

export {
    updateUserService
}