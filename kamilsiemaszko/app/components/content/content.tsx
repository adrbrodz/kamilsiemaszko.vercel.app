import FirstSection from "./components/firstSection";
import CallToAction from "./components/callToAction";
import SecondSection from "./components/secondSection";
import AboutMe from "./components/aboutMe";

const Content = () => {
    return (
        <div className="sm:px-20 lg:space-y-10 lg:px-100 p-5 text-white flex-row">
            <FirstSection />
            <CallToAction />
            <SecondSection />
            <AboutMe />
        </div>
    );
};

export default Content;