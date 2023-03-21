import { Contact } from '../Contact';

export function Footer() {
  return (
    <footer className="">
      <Contact />

      <div className="w-full h-[102px] flex justify-center items-center text-center flex-col">
        Desenvolvido por Marcelo S Silva <br /> 2023
      </div>
    </footer>
  );
}
