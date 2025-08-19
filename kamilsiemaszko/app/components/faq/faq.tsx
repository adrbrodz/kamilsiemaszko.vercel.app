'use client';

import Image from "next/image";
import { useState } from "react";
import getQuestions from "./functions/questions";

const FAQ = () => {
    const [questionId, setQuestionId] = useState<any>(null)

    const anwserws: any = [
        <p>
            Pod moim okiem trenowanie sportów walki rozpoczniesz od nauki bazowych ruchów, występujących w
            większości technik. Zaczniesz od podstawowych elementów, takich jak chociażby prawidłowe poruszanie
            się i postawa.
            <br /><br />
            Dopiero po ich zrozumieniu i opanowaniu, wprowadzimy kolejne elementy.
            Ten system szkolenia nie wymaga od Ciebie żadnego wcześniejszego przygotowania, a wiedza jest łatwa
            do przyswojenia.
        </p>,
        <p>
            Na początek wystarczy wygodny strój sportowy, ręcznik i woda.
            <br /><br />
            Jeśli zdecydujesz się na dłuższą współpracę, potrzebne będą rękawice bokserskie.
        </p>,
        <p>
            To zależy jakie są Twoje cele treningowe. Trenujesz dla przyjemności, dla zdrowia? Jak
            wiele czasu poświęcasz na aktywność fizyczną? Czy oprócz treningu personalnego trenujesz tez w
            grupie?
            <br /><br />
            Warto pamiętać, że w każdym rodzaju aktywności fizycznej, najważniejsza jest regularność, a w
            sportach walki także powtarzalność. Jedna jednostka treningowa w tygodniu to minimum. Osobiście
            polecam 2 lub 3.
            <br /><br />
            Jeśli nie wiesz, jaka liczba treningów będzie dla Ciebie najlepsza, odezwij się. Jestem tu dla Ciebie!
        </p>,
        <p>
            Możemy zacząć, kiedy tylko chcesz! Z doświadczenia jednak wiem, że im bardziej odkładasz rozpoczęcie
            treningów, tym mniej prawdopodobne, że do tego dojdzie.
            <br /><br />
            Czy naprawdę chcesz czekać do kolejnego poniedziałku, początku miesiąca czy kolejnego roku?
            Ten czas i tak minie, czy warto zatem dalej to odkładać?
        </p>,
        <p>
            Każdy trening rozpoczynamy rozgrzewką, by Twoje ciało było przygotowane na dalsze ćwiczenia.
            Następnie przechodzimy do części głównej, w której ćwiczymy różne techniki i elementy. Zaczynamy od
            podstaw, z czasem dokładając coraz więcej sekwencji.
            <br /><br />
            Początkujący wszystkie ćwiczenia wykonują bez kontaktu, na tarczach, worku lub innych przyrządach.
            Bardziej zaawansowani, mogą, ale nie muszą, wykonywać ćwiczenia bardziej kontaktowe, w pełnych
            ochraniaczach lub sparingi.
        </p>,
        <p>
            Przede wszystkim indywidualnym podejściem. Na treningu personalnym jestem w stanie całkowicie
            dostosować metodę i zestaw ćwiczeń do twoich potrzeb i możliwości.
            <br /><br />
            Masz też pewność, że przez cały
            czas trwania treningu będziesz mieć 100% mojej uwagi, więc ryzyko kontuzji spowodowanych
            nieprawidłową techniką spada praktycznie do zera, a progres będzie szybki.
        </p>,
        <p>
            Oczywiście! Trening sportów walki na standardowych obrotach cechuje się intensywnością, a co za tym
            idzie wysokim wydatkiem energetycznym potrzebnym do spalania tkanki tłuszczowej.
        </p>,
        <p>
            Trening personalny jest w pełni dostosowany do Twoich możliwości. Nieważne z jakiego poziomu
            startujesz, wraz z podjęciem regularnej aktywności fizycznej, Twoja kondycja będzie rosła w
            odpowiednim tempie. Jednocześnie, cały czas będę zwracać uwagę na to, by nie dopuścić do przeciążenia
            Twojego organizmu.
        </p>,
        <p>
            Do wyboru są dwie w pełni wyposażone sale treningowe w Poznaniu, ale trening można zaaranżować
            nawet w twoim mieszkaniu, a gdy jest ciepło — w parku.
        </p>,
        <p>
            Treningi prowadzę od rana do wieczora, przez 7 dni w tygodniu. Napisz do mnie, na pewno znajdziemy
            odpowiadającą Ci godzinę.
        </p>,
        <p>
            Trening jest dla każdej osoby chcącej trenować. Oprócz wymiernych efektów zdrowotnych i umiejętności
            może pomóc w budowaniu poczucia niezależności i pewności siebie. W trakcie kariery trenerskiej
            prowadziłem dziesiątki kobiet pomagając im osiągać cele.
        </p>,
        <p>
            Na treningu personalnym eliminujemy zagrożenia, w tym wystąpienie właśnie takich kontuzji, które
            mogą zdarzyć się na zajęciach grupowych. Podczas treningów nie musisz w ogóle sparować, w zamian
            trenując zupełnie bez kontaktu na tarczach, worku i innych przyrządach. Jednocześnie w dalszym ciągu
            rozwijając swoje umiejętności.
        </p>,
        <p>
            Nie ma ku temu żadnych przeciwskazań. Od początku pracy jako trener miałem podopiecznych w różnym
            wieku, także szkolnym i wczesnoszkolnym. Podczas treningów z dziećmi, większy nacisk kładę na
            ćwiczenia ogólnorozwojowe. Zajęcia te pomagają rozbudzić ciekawość, rozwijają koordynację ruchową i
            inne aspekty rozwojowe.
        </p>
    ]

    return (
        <div id="faq" className="flex-row text-white sm:px-20 lg:px-100 p-5 mt-5">
            <p className="font-bold mb-5">FAQ — CZĘSTE PYTANIA</p>
            {
                getQuestions().map((question: string, index: number) => (
                    <div key={index} className="mt-2">
                        <div className="faq-container"
                            onClick={() => setQuestionId(questionId === index ? null : index)}>
                            <p className="w-full">{question}</p>
                        </div>
                        {questionId === index &&
                            <div key={index} className="flex px-5 border-3 border-t-0 border-accent mx-auto p-3 text-white text-medium text-sm cursor-pointer lg:p-10"
                                onClick={() => setQuestionId(null)}
                            >
                                {anwserws[index]}
                            </div>
                        }
                    </div>
                ))
            }

            <Image
                src="/images/end.png"
                alt="end"
                width={500}
                height={500}
                className="mx-auto px-5 mt-10 w-auto h-auto"
                priority
            />
        </div>
    )
}

export default FAQ;