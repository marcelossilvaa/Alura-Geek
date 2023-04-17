import Logo from '../../assets/Logo.png';
import { Button } from '../Button';
import { Link } from './Link';
import { links } from '../../@helpers/link';

export function Contact() {
  return (
    <section className="container mx-auto max-w-[72rem]">
      <div className="grid grid-cols-2 py-16 sm:grid-cols-4">
        <img src={Logo} alt="" />
        <div className="flex flex-col gap-5">
          {links.map(item => (
            <Link key={item.id} link={item.link} title={item.title} />
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

            <textarea
              className="h-[82px] rounded px-3 py-4 outline-none resize-none"
              placeholder="Escreva sua mensagem"
            ></textarea>
            <Button title="Enviar mensagem" />
          </form>
        </div>
      </div>
    </section>
  );
}
