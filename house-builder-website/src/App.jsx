import { useRef } from "react";
import Header from "./Components/Header.jsx";
import HeroSection from "./Components/Herosection/Hero-Section.jsx";
import About from "./Components/AboutSection/About.jsx";
import ServicesSection from "./Components/ServicesSection/Services.jsx";
import TestimonialSection from "./Components/TestimonialSection/TestimonialSection.jsx";
import ContactSection from "./Components/ContactSection/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import {
  Home,
  Hammer,
  PenTool,
  ClipboardList,
  LampDesk,
  PlugZap,
  TreePine,
  Sun,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToTestimonial = () => {
    testimonialRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Services = [
    {
      id: 1,
      title: "Residential & Commercial Building",
      icon: Home,
    },
    {
      id: 2,
      title: "Renovations & Extensions",
      icon: Hammer,
    },
    {
      id: 3,
      title: "Architectural Planning",
      icon: PenTool,
    },
    {
      id: 4,
      title: "Project Supervision",
      icon: ClipboardList,
    },
    {
      id: 5,
      title: "Interior & Exterior Design",
      icon: LampDesk,
    },
    {
      id: 6,
      title: "Plumbing & Electrical Installation",
      icon: PlugZap,
    },
    {
      id: 7,
      title: "Landscaping & Outdoor Projects",
      icon: TreePine,
    },
    {
      id: 8,
      title: "Energy-Efficient Construction",
      icon: Sun,
    },
  ];

  return (
    <>
      <Header
        onAboutClick={handleScrollToAbout}
        onHomeClick={handleScrollToHome}
        onTestimonialClick={handleScrollToTestimonial}
        onServicesClick={handleScrollToServices}
        onContactClick={handleScrollToContact}
      />
      
      <div ref={homeRef}>
        <HeroSection onGetStartedClick={handleScrollToAbout} />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={testimonialRef}>
        <TestimonialSection />
      </div>

      <div ref={servicesRef}>
        <ServicesSection services={Services} />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer />
    </>
  );
}

export default App;
