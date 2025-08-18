const scrollToWithOffset = (id: string) => {

    const element = document.getElementById(id);
    if (element) {
        const yOffset = id == "kontakt" ? -250 : -80; // Adjust as needed
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
}

export default scrollToWithOffset;