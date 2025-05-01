"use server"

import {APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases} from "@/lib/appwrite.config";
import {ID, Query} from "node-appwrite";
import {formatDateTime, parseStringify} from "@/lib/utils";
import {revalidatePath} from "next/cache";

export const createAppointment = async ( appointment: CreateAppointmentParams ) => {
    try{
        const newAppointment = await databases.createDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            ID.unique(),
            {
                ...appointment
            }
        )

        return parseStringify(newAppointment);
    } catch (error) {
        console.log(error)
    }
}

export const updateAppointment = async ({
                                            appointmentId,
                                            userId,
                                            timeZone,
                                            appointment,
                                            type,
                                        }: UpdateAppointmentParams) => {
    try {
        const updatedAppointment = await databases.updateDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            appointmentId,
            appointment
        );

        if (!updatedAppointment) throw Error;

        const smsMessage = `Greetings from CarePulse. ${type === "schedule" ? `Your appointment is confirmed for ${formatDateTime(appointment.schedule!, timeZone).dateTime} with Dr. ${appointment.primaryPhysician}` : `We regret to inform that your appointment for ${formatDateTime(appointment.schedule!, timeZone).dateTime} is cancelled. Reason:  ${appointment.cancellationReason}`}.`;

        revalidatePath("/admin");
        return parseStringify(updatedAppointment);
    } catch (error) {
        console.error("An error occurred while scheduling an appointment:", error);
    }
};

export const getAppointment = async (id: string) => {
    try{
        const appointment = await databases.getDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            id
        );

        return parseStringify(appointment);
    } catch(error) {

    }
}
