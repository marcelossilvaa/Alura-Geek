import { Button } from '../../components/Button';
import { ProductsComponent } from '../../components/ProductsComponent';

export function Home() {
  return (
    <>
      <div>
        <section className="banner">
          <div className="container mx-auto max-w-[95%] h-full lg:max-w-[72rem]">
            <div className="text-white h-full flex flex-col justify-end py-8  gap-1 sm:gap-4">
              <h1 className="text-xl font-bold sm:text-xxl">
                Dezembro Promocional
              </h1>
              <h5 className="text-base font-bold">
                Produtos selecionados com 33% de desconto
              </h5>
              <Button variant={false} title="Ver consoles" />
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-[72rem]">
          <div className="flex flex-col gap-4 my-8">
            <ProductsComponent title={'StarWars'} />
            <ProductsComponent title={'Consoles'} />
            <ProductsComponent title={'Diversos'} />
          </div>
        </section>
      </div>
    </>
  );
}
