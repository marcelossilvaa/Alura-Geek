import Logo from '../../assets/Logo.png';
import { MagnifyingGlass } from 'phosphor-react';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="container mx-auto max-w-[95%] h-full lg:max-w-[72rem]">
      <div className="h-28 flex justify-between items-center">
        <div className="flex items-center gap-1 sm:gap-8">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>

          <input
            className="w-32 h-10 bg-gray-100 outline-none border-none rounded-[20px] px-4 py-2  placeholder-transparent sm:w-96 sm:font-thin sm:placeholder-gray-400"
            type="text"
            placeholder="O que deseja encontrar?"
          />
          <MagnifyingGlass
            className="cursor-pointer relative right-6 text-gray-200 sm:right-16"
            size={17}
          />
        </div>
        <NavLink to="/login">
          <button className="h-[51px] w-[100px] flex items-center justify-center p-4 border transition duration-150 border-blue-500 text-blue-500 hover:bg-blue-100 sm:w-[181px]">
            Login
          </button>
        </NavLink>
      </div>
    </header>
  );
}
