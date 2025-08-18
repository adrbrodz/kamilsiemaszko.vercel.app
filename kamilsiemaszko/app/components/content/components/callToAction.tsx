'use client';

import scrollToWithOffset from "@/app/functions/scrollToWithOffset";

const CallToAction = () => {
    return (
        <div
            className="lg:w-1/2 flex mx-auto border-3 border-accent rounded-lg p-3 text-white font-bold text-center cursor-pointer text-sm"
            onClick={() => scrollToWithOffset("kontakt", true)}
        >
            <p className="w-full">UMÓW SIĘ NA TRENING</p>
        </div>
    );
};

export default CallToAction;