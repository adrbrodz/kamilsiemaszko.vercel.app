import StickyHeader from "./components/sticky-header/stickyHeader";
import HeroPage from "./components/heroPage";
import Content from "./components/content/content";
import Contact from "./components/contact/contact";
import FAQ from "./components/faq/faq";
import TrustindexWidget from "./components/trustindexWidget";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function Home() {
  return (
    <div className={`${montserrat.className} main-container`}>
      <StickyHeader />
      <HeroPage />
      <Content />
      <TrustindexWidget />
      <Contact />
      <FAQ />
      <p className="italic text-xs text-right text-white p-5 px-10">
        <a  href="https://adrbrodz.github.io" target="_blank">
          by: Adrian Brodziński
        </a>
      </p>
    </div>
  );
}
