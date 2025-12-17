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

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {selectedData.map(item => (
          <Link
            key={item.id}
            to={`/productpage?id=${item.id}&name=${item.name}&price=${
              item.price
            }&description=${item.description}&image=${encodeURIComponent(
              item.image
            )}`}
            className="group"
          >
            <div className="h-full bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-44 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-3 flex flex-col gap-1">
                <p className="font-medium text-gray-800 text-sm truncate" title={item.name}>
                  {item.name}
                </p>
                <p className="font-bold text-base text-black">{item.price}</p>
                <p className="text-blue-500 font-bold text-xs mt-1 transition-colors group-hover:text-blue-700">
                  Ver produto
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
