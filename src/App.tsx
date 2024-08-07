import { useEffect, useRef, useState } from "react";
import NavBar from "./components/widgets/NavBar";
import CreationsPage from "./pages/CreationsPage";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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

      // Clean up the effect when the component unmounts
      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-neutral-900">
      <NavBar isScrolled={isScrolled} />
      <div data-scroll-container ref={scrollRef}>
        <CreationsPage />
      </div>
    </div>
  );
}

export default App;
