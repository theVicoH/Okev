import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroImage from '../assets/images/hero-image.jpeg';

const CreationsPage = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <img 
        src={heroImage} 
        alt="Purple Dress" 
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
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 font-source uppercase font-light text-neutral-50"
      >
        Découvrir
      </button>
    </div>
  );
}

export default CreationsPage;
