import pdt1 from '../../../assets/cards/consoles/pdt1.png';
import pdt2 from '../../../assets/cards/consoles/pdt2.png';
import pdt3 from '../../../assets/cards/consoles/pdt3.png';
import pdt4 from '../../../assets/cards/consoles/pdt4.png';
import pdt5 from '../../../assets/cards/consoles/pdt5.png';
import pdt6 from '../../../assets/cards/consoles/pdt6.png';
import { ArrowRight } from 'phosphor-react';

export const dataConsoles = [
  {
    image: pdt1,
    name: 'Produto XYZ',
    price: 'R$20,00',
    description: '',
  },
  {
    image: pdt2,
    name: 'Playstation 5',
    price: 'R$60,00',
    description: '',
  },
  {
    image: pdt3,
    name: 'Produto XYZ',
    price: 'R$60,00',
    description: '',
  },
  {
    image: pdt4,
    name: 'Produto XYZ',
    price: 'R$60,00',
    description: '',
  },
  {
    image: pdt5,
    name: 'Produto XYZ',
    price: 'R$60,00',
    description: '',
  },
  {
    image: pdt6,
    name: 'Produto XYZ',
    price: 'R$60,00',
    description: '',
  },
];

export function Consoles() {
  return (
    <div className="container mx-auto max-w-[95%] h-full lg:max-w-[72rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Consoles</h1>
        <h3 className="text-blue-500 font-bold flex flex-row items-center gap-1">
          Ver tudo <ArrowRight size={22} />
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {dataConsoles.map((item, index) => (
          <div key={index}>
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
  );
}
