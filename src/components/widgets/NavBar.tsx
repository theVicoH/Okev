import BurgerButton from "../ui/BurgerButton";
import Drawer from "../ui/Drawer";
import { useState } from 'react';

interface Props {
  isScrolled: boolean;
}

const NavBar: React.FC<Props> = ({ isScrolled }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div 
        id="navbar" 
        className={`px-8 flex flex-row justify-between border-b-[1px] fixed top-0 w-full z-20 transition-colors duration-300 ${isScrolled || isDrawerOpen ? 'bg-white border-neutral-300' : 'bg-transparent border-neutral-50'}`}
      >
        <h3 className={`font-source text-4xl font-light ${isScrolled || isDrawerOpen ? 'text-black' : 'text-white'} my-5`}>OKEV</h3>
        <BurgerButton isScrolled={isScrolled || isDrawerOpen} onClick={handleDrawerToggle} />
      </div>
      <Drawer isOpen={isDrawerOpen} />
    </>
  );
};

export default NavBar;
