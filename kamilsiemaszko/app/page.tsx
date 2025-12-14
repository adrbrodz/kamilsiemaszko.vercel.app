'use client'
import StickyHeader from "./components/sticky-header/stickyHeader";
import HeroPage from "./components/heroPage";
import Content from "./components/content/content";
import Contact from "./components/contact/contact";
import FAQ from "./components/faq/faq";
import { Bebas_Neue, Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className={`${montserrat.className} main-container`}>
      
      <HeroPage />
      <Content />
 

      <div className="italic text-xs font-light space-y-2 text-right text-white p-5 px-10">
        <p>
          design: Patrycja Łukomska
        </p>
        <a  href="https://adrbrodz.vercel.app/" target="_blank">
          by: Adrian Brodziński
        </a>
      </div>
    </div>
  );
}
