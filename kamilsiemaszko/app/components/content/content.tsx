import { Bebas_Neue } from "next/font/google";
import { use, useRef, useState } from "react";
import faqQuestions from "../../functions/faqData";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import scrollToWithOffset from "@/app/functions/scrollToWithOffset";
import Image from "next/image";
import { ElfsightWidget } from "react-elfsight-widget";


const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
});

const Content = () => {

    const [faqQuestionId, setFaqQuestionId] = useState<any>(1)
    const [userInput, setUserInput] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    if (process.env.NODE_ENV === "development") {
        console.log(userInput);
    }
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const serviceID: any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID: any = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID: any = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        try {
            const emailParams = {
                name: userInput.name,
                phone: userInput.phone,
                email: userInput.email,
                message: userInput.message
            };

            const res = await emailjs.send(serviceID, templateID, emailParams, userID);

            if (res.status === 200) {
                toast.success("Message sent successfully!");
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again later.");
        }
    };

    const categories = ["Zaczynam od zera", "Organizacja treningów", "Cele i motywacja"]
    const faq = faqQuestions()

    return (
        <div className="flex-row">
            <div className="bg-[#fff34a] w-full lg:px-25 xl:px-55 md:px-20 sm:px-30 text-xs px-10 md:text-base py-9 xl:text-xl mt-[-1]">
                <span className="font-semibold">“Sporty walki są dla każdego bez wyjątku.</span> Niezależnie od wieku, kondycji czy doświadczenia – wystarczy chęć i wygodny strój sportowy. Twoja droga do siły i pewności siebie zaczyna się gdy wejdziesz na matę. Reszta przyjdzie sama. <span className="font-semibold">A ja Ci w tym pomogę.</span>”
            </div>
            <div className="md:hidden">
                <Image
                    src="/images/about-mobile.png"
                    alt="Content Image"
                    height={10000}
                    width={10000}
                    className="w-full h-auto"
                />
            </div>
            <div className="bg-[url(/images/about.png)] hidden md:flex text-xs lg:text-sm lg:px-25 xl:px-55 md:px-20 sm:px-10 px-20 w-full text-white bg-contain bg-no-repeat bg-center flex">
                <div className="w-1/2 py-10 xl:pr-50 lg:pr-30 md:pr-2 sm:pr-25 invisible lg:visible">
                    Nazywam się Kamil Siemaszko i od dziecka jestem związany ze sportami walki. Boks tajski trenuję od 2012 roku – zdobyłem cztery złote medale Mistrzostw Polski i rywalizowałem na zawodowych ringach.
                    <br />
                    <br />
                    Doświadczenie zdobywałem w Europie i w Tajlandii – kolebce tego sportu – gdzie miałem okazję trenować i walczyć.
                </div>
                <div>

                </div>
                <div className="w-1/2 py-10 xl:pl-50 lg:pl-30 md:pl-2 sm:pl-25 flex-row relative invisible lg:visible">
                    Dziś reprezentuję czołowy klub Czerwony Smok w Poznaniu i rozwijam swój warsztat w otoczeniu zawodników oraz trenerów światowej klasy.
                    <br />
                    <br />
                    Dzięki temu wiem, że mogę zaoferować treningi na najwyższym poziomie.
                    <div className="uppercase bg-[#fff34a] text-black absolute bottom-0 flex py-1 px-4 text-2xl mt-auto">
                        <span className={`${bebas.className} flex m-auto cursor-pointer`} onClick={() => scrollToWithOffset("contact-form")}>Zapisz się na trening</span>
                    </div>
                </div>
            </div>
            <div className="text-white  lg:h-0 lg:invisible px-10 md:px-20 mb-15 md:mb-0 text-sm">
                <div className="text-xs md:text-base py-10" >
                    Nazywam się Kamil Siemaszko i od dziecka jestem związany ze sportami walki. Boks tajski trenuję od 2012 roku – zdobyłem cztery złote medale Mistrzostw Polski i rywalizowałem na zawodowych ringach.
                    <br />
                    <br />
                    Doświadczenie zdobywałem w Europie i w Tajlandii – kolebce tego sportu – gdzie miałem okazję trenować i walczyć.<br /><br />
                    Dziś reprezentuję czołowy klub Czerwony Smok w Poznaniu i rozwijam swój warsztat w otoczeniu zawodników oraz trenerów światowej klasy.<br /><br />

                    Dzięki temu wiem, że mogę zaoferować treningi na najwyższym poziomie.
                </div>
                <div>

                </div>

                <div className="uppercase bg-[#fff34a] text-black flex md:w-1/3 m-auto py-1 px-4 text-2xl mt-auto">
                    <span className={`${bebas.className} flex m-auto cursor-pointer`} onClick={() => scrollToWithOffset("contact-form")}>Zapisz się na trening</span>
                </div>
            </div>
            <div className="text-[#fff34a] xl:px-100 py-1 md:py-20 xl:text-xl/10 md:px-20 px-10 md:text-xl/8 text-xs/6 text-center">
                <span className="font-semibold">Nie musisz walczyć w ringu</span> – treningi to przede wszystkim sposób na rozwój ciała i umysłu, a sparing jest tylko dodatkiem.
                <br />
                <br />

                Jeśli szukasz ciekawej i angażującej formy aktywności, zapisz się na trening – <span className="font-semibold">razem znajdziemy formę zajęć idealną dla Ciebie</span>.
            </div>
            <div className="text-white xl:pl-55  lg:h-full lg:flex h-0 hidden">

                <div className="text-white w-1/2">

                    <div className={`${bebas.className} xl:text-4xl`} >
                        FAQ — CZĘSTE PYTANIA
                    </div>
                    <div className="font-semibold mt-8">Zaczynam od zera</div>
                    <br />
                    <div className="text-base/8">
                        {
                            faq
                                .filter((q: any) => q.category === categories[0])
                                .map((q: any) =>
                                    <div key={q.id}
                                        className="cursor-pointer hover:text-[#fff34a]"

                                        onClick={() => setFaqQuestionId(q.id)}
                                    >
                                        <span className={`${q.id == faqQuestionId ? "text-[#fff34a]" : ""}`}>{q.question}</span>
                                    </div>
                                )
                        }
                    </div>
                    <div className="font-semibold mt-5">Organizacja treningów</div>
                    <div className="mt-5 text-base/8">
                        {
                            faq
                                .filter((q: any) => q.category === categories[1])
                                .map((q: any) =>
                                    <div key={q.id}
                                        className="cursor-pointer hover:text-[#fff34a]"
                                        onClick={() => setFaqQuestionId(q.id)}
                                    >
                                        <span className={`${q.id == faqQuestionId ? "text-[#fff34a]" : ""}`}>{q.question}</span>
                                    </div>
                                )
                        }
                        <div className="font-semibold my-5">Cele i motywacja</div>
                        {
                            faq
                                .filter((q: any) => q.category === categories[2])
                                .map((q: any) =>
                                    <div key={q.id}
                                        className="cursor-pointer hover:text-[#fff34a]"

                                        onClick={() => setFaqQuestionId(q.id)}
                                    >
                                        <span className={`${q.id == faqQuestionId ? "text-[#fff34a]" : ""}`}>{q.question}</span>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className=" bg-[url(/images/faq1.png)] px-30 py-10 w-2/3 flex bg-contain mt-[4rem] bg-no-repeat ">
                    {
                        faqQuestionId !== 0 ?
                            <div className="flex-row">
                                <div className="text-[#fff34a] text-base/8">
                                    {faq.filter((q: any) => q.id === faqQuestionId)[0]?.question}
                                </div>

                                <div className="mt-10 text-base/8">
                                    {faq.filter((q: any) => q.id === faqQuestionId)[0]?.answer}
                                </div>
                            </div>

                            : ""}

                </div>
            </div>
            <div className=" lg:h-0 lg:invisible lg:hidden mt-15">
                <Image
                    src="/images/faq-mobile.png"
                    alt="FAQ Mobile"
                    height={10000}
                    width={10000}
                    className="w-full h-auto"
                />
                <div className=" md:mb-20 hidden md:flex">
                    <div className="text-white w-1/2 px-20 py-10 text-sm">

                        <div className={`${bebas.className} text-3xl `} >
                            FAQ — CZĘSTE PYTANIA
                        </div>
                        <div className="">
                            <div className="font-semibold mt-8">Zaczynam od zera</div>
                            <br />
                            <div className="text-xs/8">
                                {
                                    faq
                                        .filter((q: any) => q.category === categories[0])
                                        .map((q: any) =>
                                            <div key={q.id}
                                                className="cursor-pointer hover:text-[#fff34a]"

                                                onClick={() => setFaqQuestionId(q.id)}
                                            >
                                                <span className={`${q.id == faqQuestionId ? "text-[#fff34a]" : ""}`}>{q.question}</span>
                                            </div>
                                        )
                                }
                            </div>
                            <div className="font-semibold mt-5">Organizacja treningów</div>
                            <div className="mt-5 text-xs/8">
                                {
                                    faq
                                        .filter((q: any) => q.category === categories[1])
                                        .map((q: any) =>
                                            <div key={q.id}
                                                className="cursor-pointer hover:text-[#fff34a]"
                                                onClick={() => setFaqQuestionId(q.id)}
                                            >
                                                <span className={`${q.id == faqQuestionId ? "text-[#fff34a]" : ""}`}>{q.question}</span>

                                            </div>
                                        )
                                }
                                <div className="font-semibold my-5">Cele i motywacja</div>
                                {
                                    faq
                                        .filter((q: any) => q.category === categories[2])
                                        .map((q: any) =>
                                            <div key={q.id}
                                                className="cursor-pointer hover:text-[#fff34a]"

                                                onClick={() => setFaqQuestionId(q.id)}
                                            >
                                                <span className={`${q.id == faqQuestionId ? "text-[#fff34a]" : ""}`}>{q.question}</span>

                                            </div>
                                        )
                                }
                            </div>
                        </div>

                    </div>
                    <div className="text-white w-1/2 text-sm mt-25 pr-20 border-l border-[#fff34a] pl-20 ">
                        {
                            faqQuestionId !== 0 ?
                                <div className="flex-row">
                                    <div className="text-[#fff34a] text-xs/8">
                                        {faq.filter((q: any) => q.id === faqQuestionId)[0]?.question}
                                    </div>

                                    <div className="mt-10 text-xs/8">
                                        {faq.filter((q: any) => q.id === faqQuestionId)[0]?.answer}
                                    </div>
                                </div>

                                : ""}
                    </div>
                </div>
                <div className="md:hidden md:invisible md:h-0">
                    <div className="text-white px-10 pt-10 text-sm">

                        <div className={`${bebas.className} text-3xl `} >
                            FAQ — CZĘSTE PYTANIA
                        </div>
                        <div className="">
                            <div className="font-semibold mt-8">Zaczynam od zera</div>
                            <br />
                            <div className="text-xs/6">
                                {
                                    faq
                                        .filter((q: any) => q.category === categories[0])
                                        .map((q: any) =>
                                            <div key={q.id}
                                                className={`${q.id == faqQuestionId && faqQuestionId!= 1 ? "mt-5" : ""}`}

                                                onClick={() => setFaqQuestionId(q.id)}
                                            >
                                                <span className={`${q.id == faqQuestionId ? "cursor-pointer hover:text-[#fff34a] text-[#fff34a]" : "cursor-pointer hover:text-[#fff34a]"}`}>{q.question}</span>
                                                {q.id == faqQuestionId ? <span><br />{q.answer}<br /></span> : ""}
                                            </div>
                                        )
                                }
                            </div>
                            <div className="font-semibold mt-5">Organizacja treningów</div>
                            <div className="mt-5 text-xs/6">
                                {
                                     faq
                                        .filter((q: any) => q.category === categories[1])
                                        .map((q: any) =>
                                            <div key={q.id}
                                                className={`${q.id == faqQuestionId ? "mt-5" : ""}`}

                                                onClick={() => setFaqQuestionId(q.id)}
                                            >
                                                <span className={`${q.id == faqQuestionId ? "cursor-pointer hover:text-[#fff34a] text-[#fff34a]" : "cursor-pointer hover:text-[#fff34a]"}`}>{q.question}</span>
                                                {q.id == faqQuestionId ? <span><br />{q.answer}<br /></span> : ""}
                                            </div>
                                        )
                                }
                                <div className="font-semibold my-5">Cele i motywacja</div>
                                {
                                     faq
                                        .filter((q: any) => q.category === categories[2])
                                        .map((q: any) =>
                                            <div key={q.id}
                                                className={`${q.id == faqQuestionId ? "mt-5" : ""}`}

                                                onClick={() => setFaqQuestionId(q.id)}
                                            >
                                                <span className={`${q.id == faqQuestionId ? "cursor-pointer hover:text-[#fff34a] text-[#fff34a]" : "cursor-pointer hover:text-[#fff34a]"}`}>{q.question}</span>
                                                {q.id == faqQuestionId ? <span><br />{q.answer}<br /></span> : ""}
                                            </div>
                                        )
                                }
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="mt-20 px-10 md:px-30">
                  {
<ElfsightWidget widgetId="6da72076-585c-4b1e-963d-a332ac6ed0a7"/>
      } 
            </div>
               
            <div className="bg-[#fff34a] px-10 mt-15 lg:mt-20 w-full lg:px-75 xl:px-55 md:px-20 py-9 xl:text-xl flex-row">

                <div className={`${bebas.className} text-4xl`} >
                    KONTAKT
                </div>
                <div className="flex-row md:flex">

                    <div className="flex-row md:w-1/2">
                        <div className={`${bebas.className} text-4xl md:mt-10`} >
                            KAMIL SIEMASZKO
                        </div>
                        <div className={`text-sm `} >
                            <p>TRENER MUAI THAI</p>
                            <p className="mt-4">+48 791 844 061</p>
                            <p className="mt-4">trening@kamilsiemaszko.pl</p>
                        </div>
                    </div>
                    <div className="flex-row lg:w-1/2 md:w-2/3 mt-10 text-sm">
                        <form onSubmit={handleSubmit} id="contact-form" >
                            <div className="flex w-full">
                                <input type="text" name="name" required placeholder="imię" onChange={handleChange} className="outline-hidden placeholder-black mb-4 p-2 w-1/3 text-black border-t-1 " />
                                <input type="text" name="phone" required placeholder="nr tel." onChange={handleChange} className="outline-hidden placeholder-black mb-4 p-2 w-1/3 text-black border-t-1 " />
                                <input type="email" name="email" required placeholder="mail" onChange={handleChange} className="outline-hidden placeholder-black mb-4 p-2 w-1/3 text-black border-t-1 " />
                            </div>
                            <div className="flex w-full">
                                <textarea name="message" required placeholder="wiadomość" onChange={handleChange} className="outline-hidden w-full placeholder-black mb-4 p-2 w-3/4 text-black border-t-1 " />
                            </div>
                            <hr />
                            <div className={`${bebas.className} text-xl p-2 `} >
                                <button type="submit" className="cursor-pointer">WYŚLIJ</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>



        </div>
    );
};
export default Content;