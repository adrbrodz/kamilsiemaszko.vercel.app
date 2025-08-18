import StickyHeader from "./components/sticky-header/stickyHeader";
import HeroPage from "./components/heroPage";
import Content from "./components/content/content";
import Contact from "./components/contact/contact";
import FAQ from "./components/faq/faq";
import TrustindexWidget from "./components/trustindexWidget";

export default function Home() {
  return (
    <div className="main-container">
      <StickyHeader />
      <HeroPage />
      <Content />
      <TrustindexWidget />
      <Contact />
      <FAQ />
    </div>
  );
}
