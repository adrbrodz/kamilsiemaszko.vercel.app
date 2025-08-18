'use client';

import Image from "next/image";
import { useState } from "react";

const Contact = () => {

    const [numer, setNumer] = useState("Pokaż numer");
    const [mail, setMail] = useState("Pokaż email");

    const contactSections = {
        person: "Kamil Siemaszko — trener Muay Thai",
        phone: numer,
        email: mail
    }

    const ContactSection = (icon: string, text: string) => {
        return (
            <div className="flex" id="kontakt">
                <div className={`contact-section ${icon != "person" ? "cursor-pointer" : ""}`}
                    onClick={() => {
                        if (icon === "phone") {
                            setNumer("+48 791 844 061");
                        } else if (icon === "email") {
                            setMail("siemaszkomedia@gmail.com")
                        }
                    }}>
                    <Image
                        src={`/icons/${icon}.svg`}
                        alt={icon}
                        width={20}
                        height={20}
                        className="my-auto"
                    />
                    <p className="w-full">
                        {text}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex-row text-white sm:px-20 lg:px-100 px-5 lg:mt-10">
            <p className="font-bold">KONTAKT</p>
           
            {ContactSection("person", contactSections.person)}
            {ContactSection("phone", contactSections.phone)}
            {ContactSection("email", contactSections.email)}
        
         <a href="https://czerwony-smok.pl/home-centrum/" target="_blank">
                <Image
                    src="/images/czerwonysmok.png"
                    alt="czerwonysmok"
                    width={500}
                    height={500}
                    className="mx-auto w-auto h-auto mt-5 mb-5"
                />
            </a>
        </div>
    )
}

export default Contact;