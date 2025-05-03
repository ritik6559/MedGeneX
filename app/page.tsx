import React from 'react';
import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import {PasskeyModal} from "@/components/PasskeyModal";


const Home = ({ searchParams }: SearchParamProps) => {

    const isAdmin = searchParams.admin === 'true';


    return (
        <div className="flex h-screen min-h-screen" >
            { isAdmin && <PasskeyModal /> }
          <section className={"remove-scrollbar container my-auto"}>
            <div className={"sub-container max-w-[496px]"} >
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

                <PatientForm />

                <div className={"text-14-regular mt-20 flex justify-between"} >
                    <p className={"justify-items-end text-dark-600 xl:text-left"} >
                        © 2025 CarePulse
                    </p>
                    <Link
                        href={"/?admin=true"}
                        className={"text-green-500 cursor-pointer"}
                    >
                        Admin
                    </Link>
                </div>
            </div>
          </section>
            <Image
                src={'/assets/images/onboarding-img.png'}
                alt={"onboarding"}
                height={1000}
                width={1000}
                className={"side-img max-w-[50%]"}
            />
        </div>
    );
};

export default Home;
