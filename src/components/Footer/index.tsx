import { Contact } from '../Contact';

export function Footer() {
  return (
    <footer>
      <div className="bg-blue-100">
        <div className="container mx-auto max-w-[95%] lg:w-[72rem]">
          <Contact />
        </div>
      </div>

      <div className="container mx-auto max-w-[95%] lg:max-w-[72rem]">
        <div className="w-full h-[102px] flex justify-center items-center text-center flex-col bg-white">
          Desenvolvido por Marcelo S Silva <br /> 2023
        </div>
      </div>
    </footer>
  );
}
