import Logo from '../../assets/Logo.png';
import { Button } from '../Button';
import { Link } from './Link';
import { links } from '../../@helpers/link';

export function Contact() {
  return (
    <section className="h-[368px] p-16 bg-blue-100">
      <div className="w-full h-full max-w-6x1 mx-auto grid grid-cols-4">
        <img src={Logo} alt="" />
        <div className="flex flex-col gap-5">
          {links.map(item => (
            <Link key={item.title} link={item.link} title={item.title} />
          ))}
        </div>

        <div className="col-span-2">
          <form className="flex flex-col gap-3">
            <p className="font-bold">Fale Conosco</p>

            <input
              className="h-14 rounded px-3 py-2 outline-none "
              type="text"
              placeholder="Nome"
            />

            <textarea className="h-[82px] rounded px-3 py-4 outline-none"></textarea>
            <Button title="Enviar mensagem" />
          </form>
        </div>
      </div>
    </section>
  );
}