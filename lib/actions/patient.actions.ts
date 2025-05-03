"use server"

import {
    BUCKET_ID,
    DATABASE_ID,
    databases,
    ENDPOINT,
    PATIENT_COLLECTION_ID, PROJECT_ID,
    storage,
    users
} from "@/lib/appwrite.config";
import {ID, Query} from "node-appwrite";
import {parseStringify} from "@/lib/utils";
import {InputFile} from "node-appwrite/file"

export const createUser = async (user: CreateUserParams) => {
     try{
         const newUser = await users.create(
             ID.unique(),
             user.email,
             user.phone,
             undefined,
             user.name
         );

         console.log(newUser);

         return newUser;


     } catch (error) {
         toast
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
         // @ts-expect-error
         if( error && error?.code == 409 ) { // existing user
             const existingUser = await users.list([
                 Query.equal("email", [user.email]),
             ]);

             return existingUser?.users[0]
         }
     }
}


export const getUser = async (id: string) => {
    try{
        const user = await users.get(id);
        return parseStringify(user);
    } catch (e) {
        console.log(e);
    }
}

export const registerPatient = async ({identificationDocument, ...patient} : RegisterUserParams) => {
    try{
        console.log(patient);
        let file;
        if(identificationDocument){
            const inputFile = InputFile.fromBuffer(
                identificationDocument?.get('blob') as Blob,
                identificationDocument?.get('fileName') as string
            )

            file = await storage.createFile(
                BUCKET_ID,
                ID.unique(),
                inputFile
            );

            const newPatient = await databases.createDocument(
                DATABASE_ID,
                PATIENT_COLLECTION_ID,
                ID.unique(),
                {
                    identificationDocumentId: file.$id || null,
                    identificationDocumentUrl: file?.$id
                        ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
                        : null,
                    ...patient,
                }
            );

            return parseStringify(newPatient);
        }
    } catch (error) {
        console.log(error);
    }
}

export const getPatient = async (userId: string) => {
    try {
        const patients = await databases.listDocuments(
            DATABASE_ID!,
            PATIENT_COLLECTION_ID!,
            [Query.equal("userId", [userId])]
        );

        return parseStringify(patients.documents[0]);
    } catch (error) {
        console.error(
            "An error occurred while retrieving the patient details:",
            error
        );
    }
};
