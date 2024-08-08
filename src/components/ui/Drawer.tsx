import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface Props {
  isOpen: boolean;
}

const Drawer: React.FC<Props> = ({ isOpen }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      gsap.to(drawerRef.current, { duration: 0.3, x: 0 });
    } else {
      document.body.classList.remove('no-scroll');
      gsap.to(drawerRef.current, { duration: 0.3, x: '100%' });
    }
  }, [isOpen]);

  return (
    <div 
      ref={drawerRef} 
      className="fixed top-16 right-0 h-full w-64 bg-white shadow-lg transform translate-x-full z-30 transition-transform"
    >
      <div className="flex flex-col p-8">
        <nav className="flex flex-col space-y-4">
          <a href="#home" className="text-xl text-black">Accueil</a>
          <a href="#creations" className="text-xl text-black">Créations</a>
          <a href="#services" className="text-xl text-black">Services</a>
          <a href="#clients" className="text-xl text-black">Clients</a>
          <a href="#magazines" className="text-xl text-black">Magazines</a>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
