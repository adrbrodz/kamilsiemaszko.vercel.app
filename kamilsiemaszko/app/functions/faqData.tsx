const faqQuestions = () => {

    const categories = ["Zaczynam od zera", "Organizacja treningów", "Cele i motywacja"]
    const questions = [
        {
            id: 1,
            category: categories[0],
            question: <p>Ostatni raz ze sportem miałem/łam do czynienia w szkole. Czy sporty walki nie będą za trudne?</p>,
            answer: <p>Pod moim okiem trenowanie sportów walki rozpoczniesz od nauki bazowych ruchów, występujących w większości technik. Zaczniesz od podstawowych elementów, takich jak chociażby prawidłowe poruszanie się i postawa. <br /><br />Dopiero po ich zrozumieniu i opanowaniu, wprowadzimy kolejne elementy. Ten system szkolenia nie wymaga od Ciebie żadnego wcześniejszego przygotowania, a wiedza jest łatwa do przyswojenia.</p>
        },
        {
            id: 2,
            category: categories[0],
            question: <p>Mam bardzo słabą kondycję. Boję się, że nie dam rady.</p>,
            answer: <p>Trening personalny jest w pełni dostosowany do Twoich możliwości. Nieważne z jakiego poziomu startujesz, wraz z podjęciem regularnej aktywności fizycznej, Twoja kondycja będzie rosła w odpowiednim tempie. Jednocześnie, cały czas będę zwracać uwagę na to, by nie dopuścić do przeciążenia Twojego organizmu.</p>
        },
        {
            id: 3,
            category: categories[0],
            question: <p>Czy taki trening jest dla kobiet?</p>,
            answer: <p>Trening jest dla każdej osoby chcącej trenować. Oprócz wymiernych efektów zdrowotnych i umiejętności może pomóc w budowaniu poczucia niezależności i pewności siebie. W trakcie kariery trenerskiej prowadziłem dziesiątki kobiet pomagając im osiągać cele.</p>
        },
        {
            id: 4,
            category: categories[0],
            question: <p>Czy mogę zapisać na treningi moje dziecko?</p>,
            answer: <p>Nie ma ku temu żadnych przeciwwskazań. Od początku pracy jako trener miałem podopiecznych w różnym wieku, także szkolnym i wczesnoszkolnym. Podczas treningów z dziećmi, większy nacisk kładę na ćwiczenia ogólnorozwojowe. Zajęcia te pomagają rozbudzić ciekawość, rozwijają koordynację ruchową i inne aspekty rozwojowe.</p>
        },
        {
            id: 5,
            category: categories[1],
            question: <p>Co zabrać na pierwszy trening?</p>,
            answer: <p>Na początek wystarczy wygodny strój sportowy, ręcznik i woda. <br /><br />Jeśli zdecydujesz się na dłuższą współpracę, potrzebne będą rękawice bokserskie.</p>
        },
        {
            id: 6,
            category: categories[1],
            question: <p>Jak wygląda typowy trening?</p>,
            answer: <p>Każdy trening rozpoczynamy rozgrzewką, by Twoje ciało było przygotowane na dalsze ćwiczenia. Następnie przechodzimy do części głównej, w której ćwiczymy różne techniki i elementy. Zaczynamy od podstaw, z czasem dokładając coraz więcej sekwencji.<br /><br />Początkujący wszystkie ćwiczenia wykonują bez kontaktu, na tarczach, worku lub innych przyrządach. Bardziej zaawansowani, mogą, ale nie muszą, wykonywać ćwiczenia bardziej kontaktowe, w pełnych ochraniaczach lub sparingi.</p>
        },
        {
            id: 7,
            category: categories[1],
            question: <p>Czym wyróżnia się trening personalny?</p>,
            answer: <p>Przede wszystkim indywidualnym podejściem. Na treningu personalnym jestem w stanie całkowicie dostosować metodę i zestaw ćwiczeń do twoich potrzeb i możliwości.<br /><br />Masz też pewność, że przez cały czas trwania treningu będziesz mieć 100% mojej uwagi, więc ryzyko kontuzji spowodowanych nieprawidłową techniką spada praktycznie do zera, a progres będzie szybki.</p>
        },
        {
            id: 8,
            category: categories[1],
            question: <p>Jak często należy trenować?</p>,
            answer: <p>To zależy jakie są Twoje cele treningowe. Trenujesz dla przyjemności, dla zdrowia? Jak wiele czasu poświęcasz na aktywność fizyczną? Czy oprócz treningu personalnego trenujesz tez w grupie?<br /><br />Warto pamiętać, że w każdym rodzaju aktywności fizycznej, najważniejsza jest regularność, a w sportach walki także powtarzalność. Jedna jednostka treningowa w tygodniu to minimum. Osobiście polecam 2 lub 3.<br /><br />Jeśli nie wiesz, jaka liczba treningów będzie dla Ciebie najlepsza, odezwij się. Jestem tu dla Ciebie!</p>
        },
        {
            id: 9,
            category: categories[1],
            question: <p>Gdzie będziemy trenować?</p>,
            answer: <p>Do wyboru są dwie w pełni wyposażone sale treningowe w Poznaniu, ale trening można zaaranżować nawet w twoim mieszkaniu, a gdy jest ciepło — w parku.</p>
        },
        {
            id: 10,
            category: categories[1],
            question: <p>W jakich godzinach odbywają się treningi?</p>,
            answer: <p>Treningi prowadzę od rana do wieczora, przez 7 dni w tygodniu. Napisz do mnie, na pewno znajdziemy odpowiadającą Ci godzinę.</p>
        },
        {
            id: 11,
            category: categories[2],
            question: <p>Chcę schudnąć. Czy tajski boks to dobry sposób?</p>,
            answer: <p>Oczywiście! Trening sportów walki na standardowych obrotach cechuje się intensywnością, a co za tym idzie wysokim wydatkiem energetycznym potrzebnym do spalania tkanki tłuszczowej.</p>
        },
        {
            id: 12,
            category: categories[2],
            question: <p>Standardy mojej pracy nie pozwalają mi przychodzić <br/>do niej z podbitym okiem, a bardzo chciałbym/łabym <br/>zacząć trenować. Co teraz?</p>,
            answer: <p>Na treningu personalnym eliminujemy zagrożenia, w tym wystąpienie właśnie takich kontuzji, które mogą zdarzyć się na zajęciach grupowych. Podczas treningów nie musisz w ogóle sparować, w zamian trenując zupełnie bez kontaktu na tarczach, worku i innych przyrządach. Jednocześnie w dalszym ciągu rozwijając swoje umiejętności.</p>
        },
        {
            id: 13,
            category: categories[2],
            question: <p>Przekonałeś mnie, zaczniemy od przyszłego miesiąca/nowego roku!</p>,
            answer: <p>Możemy zacząć, kiedy tylko chcesz! Z doświadczenia jednak wiem, że im bardziej odkładasz rozpoczęcie treningów, tym mniej prawdopodobne, że do tego dojdzie.<br/><br/>Czy naprawdę chcesz czekać do kolejnego poniedziałku, początku miesiąca czy kolejnego roku? Ten czas i tak minie, czy warto zatem dalej to odkładać?</p>
        }
    ]

    return questions
}

export default faqQuestions;