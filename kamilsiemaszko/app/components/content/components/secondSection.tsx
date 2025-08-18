import Image from "next/image";

const SecondSection = () => {
    return (
        <div className="flex-row mt-10">
            <Image
                src="/images/trening.png"
                alt="trening"
                width={500}
                height={500}
                className="mx-auto w-auto h-auto"
            />
            <p>
                <br />
                <span className="font-semibold">TRENING PERSONALNY</span>
                <br />
                <br />
                Zapraszam na trening indywidualny, w parach lub małych grupach. Tego
                typu praca pozwala na dostosowanie metod do twoich potrzeb i
                możliwości. Jednocześnie masz pewność, że poświęcę Ci 100% uwagi,
                skupimy się na twoich celach treningowych, a jeśli będziesz mieć
                pytania, odpowiem na nie od razu.
                <br />
                <br />
                Specjalizuje się w Muay Thai, jednak moje wieloletnie doświadczenie
                pozwala mi na prowadzenie treningów Kickboxingu, w którym również
                startowałem zawodowo, boksu, oraz treningu stójkowego pod MMA.
            </p>
        </div>
    );
};

export default SecondSection;