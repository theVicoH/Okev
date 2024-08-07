import BurgerButton from "../ui/BurgerButton"

const NavBar = () => {
  return (
    <div className="px-8 flex flex-row justify-between border-b-[1px] border-neutral-50 fixed top-0 w-full z-20">
      <h3 className='font-source text-4xl font-light text-white my-5'>OKEV</h3>
      <BurgerButton />
    </div>
  )
}

export default NavBar
