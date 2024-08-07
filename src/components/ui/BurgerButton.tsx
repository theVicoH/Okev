import { useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Props {
  isScrolled: boolean;
}

const BurgerButton : React.FC<Props> = ( {isScrolled} ) => {
  const [isOpen, setIsOpen] = useState(false);
  const topBar = useRef(null);
  const middleBar = useRef(null);
  const bottomBar = useRef(null);
  const crossTopBar = useRef(null);
  const crossBottomBar = useRef(null);

  const handleToggle = () => {
    if (!isOpen) {
      gsap.to(topBar.current, { duration: 0.1, width: 0, transformOrigin: "left", onComplete: () => {
        gsap.to(middleBar.current, { duration: 0.1, width: 0, transformOrigin: "left", onComplete: () => {
          gsap.to(bottomBar.current, { duration: 0.1, width: 0, transformOrigin: "left", onComplete: () => {
            gsap.set([crossTopBar.current, crossBottomBar.current], { opacity: 1, width: '0%' });
            gsap.to(crossTopBar.current, { duration: 0.1, rotation: 45, width: '100%', transformOrigin: 'center center' });
            gsap.to(crossBottomBar.current, { duration: 0.1, rotation: -45, width: '100%', transformOrigin: 'center center' });
          }});
        }});
      }});
    } else {
      gsap.to([crossTopBar.current, crossBottomBar.current], { duration: 0.1, width: 0, transformOrigin: 'center center', onComplete: () => {
        gsap.set([crossTopBar.current, crossBottomBar.current], { opacity: 0 });
        gsap.to(bottomBar.current, { duration: 0.1, width: '100%', transformOrigin: "left", onComplete: () => {
            gsap.to(middleBar.current, { duration: 0.1, width: '100%', transformOrigin: "left", onComplete: () => {
                gsap.to(topBar.current, { duration: 0.1, width: '100%', transformOrigin: "left" });
              }
            });
          }
        });
        }
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleToggle} className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute w-full flex flex-col items-center justify-between">
          <div ref={topBar} className={`w-full h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'} `}></div>
          <div ref={middleBar} className={`w-full h-0.5  mt-2 ${isScrolled ? 'bg-black' : 'bg-white'} `}></div>
          <div ref={bottomBar} className={`w-full h-0.5 mt-2 ${isScrolled ? 'bg-black' : 'bg-white'} `}></div>
        </div>
        <div className="absolute w-full h-full flex items-center justify-center">
          <div ref={crossTopBar} className={`absolute w-0 h-0.5 opacity-0 ${isScrolled ? 'bg-black' : 'bg-white'} `}></div>
          <div ref={crossBottomBar} className={`absolute w-0 h-0.5 opacity-0 ${isScrolled ? 'bg-black' : 'bg-white'} `}></div>
        </div>
      </button>
    </div>
  );
};

export default BurgerButton;
