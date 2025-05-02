import React from 'react';
import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import {getUser} from "@/lib/actions/patient.actions";

const Register = async ({ params: {userId } } : SearchParamProps) => {

    const user = await getUser(userId);


    return (
        <div className="flex h-screen min-h-screen" >
            <section className={"remove-scrollbar container"}>
                <div className={"sub-container max-w-[860px] flex-1 flex-col py-10"} >
                    <Image
                        src={"/assets/icons/logo-full.svg"}
                        alt={"logo"}
                        height={1000}
                        width={1000}
                        className={"mb-12 h-10 w-fit"}
                    />

                    <RegisterForm user={user} />

                    <p className={"copyright py-12"} >
                        © 2025 CarePulse
                    </p>

                </div>
            </section>
            <Image
                src={'/assets/images/register-img.png'}
                alt={"onboarding"}
                height={1000}
                width={1000}
                className={"side-img max-w-[390px] h-screen"}
            />
        </div>
    );
};

export default Register;
