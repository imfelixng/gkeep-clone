import { Context } from "https://deno.land/x/oak/mod.ts";

const getCurrentUserController = (context: Context) => {
    const {userData} = context.state;
    context.response.body = userData;
};

export {
    getCurrentUserController
}