import { Link } from 'phosphor-react';
import { useLocation } from 'react-router-dom';
import { dataStarWars } from '../../@helpers/dataProducts';
import { Button } from '../../components/Button';

export function ProductPage() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const price = searchParams.get('price');
  const description = searchParams.get('description');
  const image = searchParams.get('image');

  return (
    <section className="container mx-auto max-w-[95%] lg:w-[72rem]">
      <div className="flex flex-col sm:flex-row gap-4 m-4">
        <img
          src={image ? decodeURIComponent(image) : ''}
          className="w-full h-auto bg-cover bg-center sm:w-[560px]"
        />

        <div className="flex justify-center flex-col gap-2">
          <h1 className="font-medium text-3xl sm:text-5xl">{name}</h1>
          <h2 className="font-bold text-base sm:text-lg">{price}</h2>
          <p>{description}</p>
          <Button title="Comprar" />
        </div>
      </div>
      <div className="h-full">
        <h1 className="text-lg font-bold">Produtos similares</h1>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {dataStarWars.map(item => (
            <div key={item.id}>
              <img src={item.image} alt="" /> <br />
              <p>{item.name}</p>
              <p className="font-bold">{item.price}</p>
              <p className="text-blue-500 font-bold cursor-pointer">
                Ver produto
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
