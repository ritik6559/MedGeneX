"use client";

import React from 'react';
import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";
import CustomFormField, {FormFieldType} from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import {UserFormValidation} from "@/lib/validation";
import {useRouter} from "next/navigation";
import {createUser} from "@/lib/actions/patient.actions";

const PatientForm = () => {

    const router = useRouter();

    const [ isLoading, setLoading ] = React.useState(false);

    const onSubmit = async ({ name, email, phone } : z.infer<typeof UserFormValidation>) => {
        setLoading(true);
        try{
            const userData = {
                name,
                email,
                phone
            };
            console.log(userData);

            const user = await createUser(userData);

            if(user) {
                router.push(`/patients/${user.$id}/register`)
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: ""
        }
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-6 flex-1"}>
                <section className={"mb-12 space-y-4"} >
                    <h1 className={"header"} >Hi there</h1>
                    <p className={"text-dark-700"} >Schedule your first appointment</p>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Full name"
                    placeholder="John Doe"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />

                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="(+91) 123456789"
                />

                <SubmitButton isLoading={isLoading}>
                    Get started
                </SubmitButton>
            </form>
        </Form>
    );
};

export default PatientForm;
