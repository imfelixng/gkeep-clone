import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

const hashPassword = async (password: string) => {
    const hashed = await bcrypt.hash(password);
    return hashed;
};

const comparePassword = async (password: string, hashed: string) => {
    const isMatched = await bcrypt.compare(password, hashed);
    return isMatched;
}

export { hashPassword, comparePassword };