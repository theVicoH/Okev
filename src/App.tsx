import { useEffect, useRef, useState } from "react";
import NavBar from "./components/widgets/NavBar";
import CreationsPage from "./pages/CreationsPage";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "./components/widgets/Footer";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

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

      scroll.on("scroll", handleScroll);

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-neutral-50">
      <NavBar isScrolled={isScrolled} />
      <div data-scroll-container ref={scrollRef}>
        <CreationsPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
