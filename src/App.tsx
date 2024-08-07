import { useEffect, useRef } from "react";
import NavBar from "./components/widgets/NavBar"
import CreationsPage from "./pages/CreationsPage"
import locomotiveScroll from "locomotive-scroll"

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      // Optional: Clean up the effect when the component unmounts
      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-neutral-900" ref={scrollRef}>
      <NavBar />
      <CreationsPage />
    </div>
  )
}

export default App
