import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

let DBInstance;
try {
    const client = new MongoClient();
    client.connectWithUri("mongodb://localhost:27017");
    DBInstance = client.database("gkeep-clone");
    console.log('Connected mongodb success!');
} catch(err) {
    console.log(err);
}

const User = DBInstance?.collection('users');
const Note = DBInstance?.collection("notes");

export { User, Note };
