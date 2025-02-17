import { ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { dataConsoles } from '../../@helpers/dataProducts';
import { dataStarWars } from '../../@helpers/dataProducts';
import { dataDiversos } from '../../@helpers/dataProducts';

interface PcProps {
  title: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

export function ProductsComponent({ title }: PcProps) {
  let selectedData: Product[] = [];

  if (title.includes('StarWars')) {
    selectedData = dataStarWars;
  } else if (title.includes('Consoles')) {
    selectedData = dataConsoles;
  } else if (title.includes('Diversos')) {
    selectedData = dataDiversos;
  }

  return (
    <div className="container mx-auto max-w-[95%] lg:w-[72rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <h3 className="text-blue-500 font-bold flex flex-row items-center gap-1">
          <a href="#" className="flex">
            Ver tudo <ArrowRight size={22} />
          </a>
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {selectedData.map(item => (
          <Link
            to={`/productpage?id=${item.id}&name=${item.name}&price=${
              item.price
            }&description=${item.description}&image=${encodeURIComponent(
              item.image
            )}`}
          >
            <div key={item.id}>
              <img src={item.image} alt="" /> <br />
              <p>{item.name}</p>
              <p className="font-bold">{item.price}</p>
              <p className="text-blue-500 font-bold cursor-pointer">
                Ver produto
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
