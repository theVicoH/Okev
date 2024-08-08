import { useEffect, useRef, useState } from "react";
import NavBar from "./components/widgets/NavBar";
import CreationsPage from "./pages/CreationsPage";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "./components/widgets/Footer";
import SideBar from "./components/widgets/SideBar";

type LocomotiveScrollInstance = {
  scrollTo: (target: HTMLElement | string, options?: { offset?: number }) => void;
  on: (event: string, callback: () => void) => void;
  destroy: () => void;
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<LocomotiveScrollInstance | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollInstance = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      setScroll(scrollInstance as LocomotiveScrollInstance);

      const handleScroll = () => {
        const heroSection = document.getElementById("hero-section");
        const navbar = document.getElementById("navbar");

        if (heroSection && navbar) {
          const heroRect = heroSection.getBoundingClientRect();
          const navbarHeight = navbar.offsetHeight;

          if (heroRect.bottom <= navbarHeight) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }
      };

      scrollInstance.on("scroll", handleScroll);

      return () => {
        scrollInstance.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-neutral-50">
      <NavBar isScrolled={isScrolled} />
      <SideBar scroll={scroll} />
      <div data-scroll-container ref={scrollRef}>
        <CreationsPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
