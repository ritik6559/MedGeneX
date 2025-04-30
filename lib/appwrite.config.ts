import * as sdk from "node-appwrite";

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID || '';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';
const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID || '';
const PATIENT_COLLECTION_ID = process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID || '';
const DOCTOR_COLLECTION_ID = process.env.NEXT_PUBLIC_DOCTOR_COLLECTION_ID || '';
const APPOINTMENT_COLLECTION_ID = process.env.NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID || '';
const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID || '';
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT || '';

const client = new sdk.Client();

console.log({
    PROJECT_ID,
    API_KEY,
    ENDPOINT
})

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

const databases = new sdk.Databases(client);
const users = new sdk.Users(client);
const messaging = new sdk.Messaging(client);
const storage = new sdk.Storage(client);

export {
    client,
    databases,
    storage,
    messaging,
    users,
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    BUCKET_ID,
    ENDPOINT
};
