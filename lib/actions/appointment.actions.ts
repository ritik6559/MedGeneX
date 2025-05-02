"use server"

import {APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases} from "@/lib/appwrite.config";
import {ID, Query} from "node-appwrite";
import {formatDateTime, parseStringify} from "@/lib/utils";
import {revalidatePath} from "next/cache";
import {Appointment} from "@/types/appwrite.types";

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

        const smsMessage = `Greetings from MedGeneX. ${type === "schedule" ? `Your appointment is confirmed for ${formatDateTime(appointment.schedule!, timeZone).dateTime} with Dr. ${appointment.primaryPhysician}` : `We regret to inform that your appointment for ${formatDateTime(appointment.schedule!, timeZone).dateTime} is cancelled. Reason:  ${appointment.cancellationReason}`}.`;

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
};
export const getRecentAppointmentList = async () => {
    try{
        const appointments = await databases.listDocuments(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            [Query.orderDesc("$createdAt")]
        );

        const initialCounts = {
            scheduledCount: 0,
            pendingCount: 0,
            cancelledCount: 0
        };

        const counts = (appointments.documents as Appointment[] ).reduce((acc, appointment) => {
            if( appointment.status === "scheduled" ) {
                acc.scheduledCount += 1;
            } else if ( appointment.status === "pending" ){
                acc.pendingCount += 1;
            } else {
                acc.cancelledCount += 1;
            }

            return acc;
        }, initialCounts);

        const data = {
            totalCounts: appointments.total,
            ...counts,
            documents: appointments.documents
        }
        return parseStringify(data);
    } catch(error) {
        console.log(error);
    }
}
