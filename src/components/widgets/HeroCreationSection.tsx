import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import locomotiveScroll from 'locomotive-scroll';
import heroImage from '../../assets/images/hero-image.jpeg';
import { GoArrowDown } from "react-icons/go";

interface LocomotiveScrollEvent {
  scroll: {
    y: number;
  };
}

const HeroCreationSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]") as HTMLElement;
    if (scrollContainer) {
      const handleScroll = (event: LocomotiveScrollEvent) => {
        const scrollY = event.scroll.y;
        gsap.to(titleRef.current, {
          y: -scrollY * 0.4,
          duration: 0.4,
          ease: 'none',
        });
        gsap.to(buttonRef.current, {
          y: scrollY * 0.4,
          duration: 0.3,
          ease: 'none',
        });
      };

      const scroll = new locomotiveScroll({
        el: scrollContainer,
        smooth: true,
      });

      scroll.on('scroll', handleScroll);

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div id="hero-section" className='relative h-screen overflow-hidden'>
      <img 
        src={heroImage} 
        alt="Hero image" 
        className="h-full w-full object-cover transform scale-100 md:scale-150 md:object-[center_10%]" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 
          ref={titleRef} 
          className="text-neutral-50 font-source text-9xl uppercase md:text-9xl"
        >
          Nos créations
        </h1>
      </div>
      <button 
        ref={buttonRef} 
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 font-source uppercase font-light text-neutral-50 flex flex-col items-center gap-2"
      >
        <span>Découvrir</span>
        <GoArrowDown className="w-6 h-6" />
      </button>
    </div>
  );
}

export default HeroCreationSection;
