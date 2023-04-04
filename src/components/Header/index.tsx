import Logo from '../../assets/Logo.png';
import { MagnifyingGlass } from 'phosphor-react';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="container mx-auto max-w-[72rem]">
      <div className="h-28 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>

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
      </div>
    </header>
  );
}
