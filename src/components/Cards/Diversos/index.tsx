import pdt1 from '../../../assets/cards/diversos/pdt1.png';
import pdt2 from '../../../assets/cards/diversos/pdt2.png';
import pdt3 from '../../../assets/cards/diversos/pdt3.png';
import pdt4 from '../../../assets/cards/diversos/pdt4.png';
import pdt5 from '../../../assets/cards/diversos/pdt5.png';
import pdt6 from '../../../assets/cards/diversos/pdt6.png';
import { ArrowRight } from 'phosphor-react';

export const dataDiversos = [
  {
    image: pdt1,
    name: 'Produto XYZ',
    price: 'R$60,00',
  },
  {
    image: pdt2,
    name: 'Produto XYZ',
    price: 'R$60,00',
  },
  {
    image: pdt3,
    name: 'Produto XYZ',
    price: 'R$60,00',
  },
  {
    image: pdt4,
    name: 'Produto XYZ',
    price: 'R$60,00',
  },
  {
    image: pdt5,
    name: 'Produto XYZ',
    price: 'R$60,00',
  },
  {
    image: pdt6,
    name: 'Produto XYZ',
    price: 'R$60,00',
  },
];

export function Diversos() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Diversos</h1>
        <h3 className="text-blue-500 font-bold flex flex-row items-center gap-1">
          Ver tudo <ArrowRight size={22} />
        </h3>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {dataDiversos.map((item, index) => (
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
