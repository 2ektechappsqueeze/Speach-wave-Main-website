import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.APPWRITE_ENDPOINT)
  .setProject(import.meta.env.APPWRITE_PROJECT_ID)// 🔐 server-only

export const databases = new Databases(client);
