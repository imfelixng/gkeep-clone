import { Context } from "https://deno.land/x/oak/mod.ts";

const getCurrentUser = (context: Context) => {
    const {userData} = context.state;
    context.response.body = userData;
};

export {
    getCurrentUser
}