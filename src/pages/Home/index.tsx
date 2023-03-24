import { Button } from '../../components/Button';
import { StarWars } from '../../components/Cards/StarWars';
import { Consoles } from '../../components/Cards/Consoles';
import { Diversos } from '../../components/Cards/Diversos';

export function Home() {
  return (
    <>
      <div>
        <section className="banner">
          <div className="container">
            <div className="text-white h-full flex flex-col justify-end py-8 gap-4">
              <h1 className="text-xxl font-bold">Dezembro Promocional</h1>
              <h5 className="text-base font-bold">
                Produtos selecionados com 33% de desconto
              </h5>
              <Button variant={false} title="Ver consoles" />
            </div>
          </div>
        </section>

        <section className="container">
          <div className="flex flex-col gap-4 my-8">
            <div>
              <StarWars />
            </div>
            <div>
              <Consoles />
            </div>
            <div>
              <Diversos />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
