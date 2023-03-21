import Logo from '../../assets/Logo.png';
import { MagnifyingGlass } from 'phosphor-react';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="max-w-6xl w-full h-28 mx-auto flex justify-between items-center">
      <div className="flex items-center gap-8">
        <img src={Logo} alt="" />
        <input
          className="w-96 h-10 bg-gray-100 outline-none border-none rounded-[20px] px-4 py-2"
          type="text"
          placeholder="O que deseja encontrar?"
        />
        <MagnifyingGlass
          className="cursor-pointer relative right-16 text-gray-200"
          size={17}
        />
      </div>
      <NavLink to="/login">
        <Button variant={true} title="Login" />
      </NavLink>
    </header>
  );
}
