// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://adita_rwt1:14920251@mongoongoing.ysjj1.mongodb.net/";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
