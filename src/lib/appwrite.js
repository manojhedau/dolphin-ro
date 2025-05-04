import { Client, Databases, Account, Storage } from "appwrite";
const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68176a7a003a496d376d");

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);
