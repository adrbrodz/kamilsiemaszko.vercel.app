import { Bebas_Neue, Montserrat } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroPage = () => {
  return (
    <div className="hero-container relative">
      <Image
        src="/images/background2.png"
        alt="Hero Image"
        height={600}
        width={600}
        className="w-full md:h-full md:visible  invisible h-0"
        />
           <Image
        src="/images/mobile.png"
        alt="Mobile Image"
        height={600}
        width={600}
        className="w-full h-full md:hidden md:h-0 md:invisible"
        />
      <a href="https://www.facebook.com/kamilxsiemaszko/" target="_blank">
        <Image
          src="/icons/facebook.svg"
          alt="Facebook"
          height={75}
          width={75}
          className="absolute top-[5%] left-[12%] md:top-[25%] md:left-[7%] xl:h-8 xl:w-8 lg:w-8 lg:h-8 w-3 h-3 md:w-5 md:h-5 hover:scale-125 transition-transform cursor-pointer"
        />
      </a>
      <a href="https://www.instagram.com/kamil_siemaszko/" target="_blank">
        <Image
          src="/icons/instagram.svg"
          alt="Instagram"
          height={100}
          width={100}
          className="absolute top-[9%] left-[12%] md:top-[33%] md:left-[7%] xl:h-8 xl:w-8 lg:w-8 lg:h-8 w-3 h-3 md:w-5 md:h-5 hover:scale-125 transition-transform cursor-pointer"
        />
      </a>
    </div>
  );
};

export default HeroPage;