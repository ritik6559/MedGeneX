import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import React from "react";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
    const patient = await getPatient(userId);

    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <div className="flex gap-3 items-center mb-12">
                        <Image
                            src="/assets/icons/logo-icon.svg"
                            alt="logo"
                            height={1000}
                            width={1000}
                            className="h-15 w-20"
                        />
                        <h1 className="font-bold text-white text-36-bold">MedGeneX</h1>
                    </div>

                    <AppointmentForm
                        patientId={patient?.$id}
                        userId={userId}
                        type="create"
                    />

                    <p className="copyright mt-10 py-12">© 2025 MedGeneX</p>
                </div>
            </section>

            <Image
                src="/assets/images/appointment-img.png"
                height={1500}
                width={1500}
                alt="appointment"
                className="side-img max-w-[390px] bg-bottom"
            />
        </div>
    );
};

export default Appointment;
