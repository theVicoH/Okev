import React from 'react';

interface SideBarProps {
  scroll: {
    scrollTo: (target: HTMLElement | string, options?: { offset?: number }) => void;
  } | null;
}

const SideBar: React.FC<SideBarProps> = ({ scroll }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement && scroll) {
      scroll.scrollTo(targetElement, { offset: -50 });
    }
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-4 z-20">
      <a
        href="#hero-section"
        onClick={(e) => handleClick(e, 'hero-section')}
        className="flex items-center justify-end space-x-2 space-x-reverse"
      >
        <span className="hidden lg:block text-gray-700">Accueil</span>
        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
      </a>
      <a
        href="#about-us-section"
        onClick={(e) => handleClick(e, 'about-us-section')}
        className="flex items-center justify-end space-x-2 space-x-reverse"
      >
        <span className="hidden lg:block text-gray-700">À Propos de nous</span>
        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
      </a>
      <a
        href="#projects-section"
        onClick={(e) => handleClick(e, 'projects-section')}
        className="flex items-center justify-end space-x-2 space-x-reverse"
      >
        <span className="hidden lg:block text-gray-700">Nos projets</span>
        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
      </a>
      <a
        href="#contact-section"
        onClick={(e) => handleClick(e, 'contact-section')}
        className="flex items-center justify-end space-x-2 space-x-reverse"
      >
        <span className="hidden lg:block text-gray-700">Contact</span>
        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
      </a>
    </div>
  );
};

export default SideBar;
