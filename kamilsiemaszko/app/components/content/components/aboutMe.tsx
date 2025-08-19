import Image from "next/image";

const AboutMe = () => {
    return (
        <div id="o mnie" className="flex-row mt-5">
            <p className="font-bold">O MNIE</p>
            <br />
            <div className="lg:flex">
            <Image
                src="/images/aboutme.png"
                alt="aboutme"
                width={500}
                height={500}
                className="mx-auto lg:mr-10  w-auto h-auto"
                priority 
            />
            <br />
            <p>
                Nazywam się{" "}
                <span className="font-bold ">Kamil Siemaszko</span>, jestem
                profesjonalnym trenerem. Ze sportami walki związany jestem od 10
                roku życia, a boks tajski trenuję od 2012 roku z licznymi sukcesami
                — wielokrotnie stawałem na podium{" "}
                <span className="font-bold ">Mistrzostw Polski</span>, w tym{" "}
                <span className="font-bold ">4 razy zdobywając złoto</span>.
                <br />
                <br />
                Równolegle walczyłem na{" "}
                <span className="font-bold ">zawodowych ringach</span>.
                Warsztat trenerski szlifowałem podróżując i zgłębiając styl walki,
                który reprezentuję{" "}
                <span className="font-bold ">w wielu europejskich krajach</span>,
                odwiedziłem również kolebkę tego sportu, czyli{" "}
                <span className="font-bold ">Tajlandię</span>, gdzie trenowałem
                i walczyłem.
                <br />
                <br />
                Reprezentuję{" "}
                <span className="font-bold ">czołowy</span> polski klub
                sportów walki — <span className="font-bold ">Czerwony Smok w Poznaniu</span>{" "}
                — na co dzień mogąc rozwijać swoje umiejętności wśród zawodników i
                trenerów <span className="font-bold ">światowej klasy</span>.
                Dzięki temu środowisku wiem, że mój warsztat jest na{" "}
                <span className="font-bold ">najwyższym poziomie</span>
            </p>
            </div>
          
        </div>
    );
};

export default AboutMe;