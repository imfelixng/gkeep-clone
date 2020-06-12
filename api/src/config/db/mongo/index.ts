import { MongoClient } from "https://deno.land/x/mongo/mod.ts";
import { MONGO_URL, MONGO_DB_NAME } from "../../env/index.ts";

let DBInstance;
try {
    const client = new MongoClient();
    client.connectWithUri(MONGO_URL);
    DBInstance = client.database(MONGO_DB_NAME);
    console.log('Connected mongodb success!');
} catch(err) {
    console.log(err);
}

const User = DBInstance?.collection('users');
const Account = DBInstance?.collection("accounts");
const Note = DBInstance?.collection("notes");

export { User, Note };
