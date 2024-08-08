import React, { useEffect, useState } from 'react';

interface SideBarProps {
  scroll: {
    scrollTo: (target: HTMLElement | string, options?: { offset?: number }) => void;
  } | null;
}

const SideBar: React.FC<SideBarProps> = ({ scroll }) => {
  const sections = [
    { id: 'hero-section', label: 'Accueil' },
    { id: 'about-us-section', label: 'À Propos de nous' },
    { id: 'projects-section', label: 'Nos projets' },
    { id: 'contact-section', label: 'Contact' },
  ];

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement && scroll) {
      scroll.scrollTo(targetElement, { offset: -50 });
    }
  };

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 space-y-4 z-20 md:right-10">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => handleClick(e, section.id)}
          className="flex items-center justify-end gap-2 space-x-reverse group"
        >
          <span className="hidden lg:block text-black opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 transition-all duration-300 translate-x-full">
            {section.label}
          </span>
          <div className="w-8 h-px bg-black opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 transition-all duration-300 translate-x-full"></div>
          <div
            className={`rounded-full transition-all duration-300 ${currentSection === section.id ? 'w-3 h-3 bg-black' : 'w-2 h-2 bg-black bg-opacity-50 group-hover:bg-opacity-100 mr-0.5'}`}
          ></div>
        </a>
      ))}
    </div>
  );
};

export default SideBar;
