import { Button } from '../../components/Button';
import { dataStarWars } from '../../@helpers/dataProducts';
import { dataConsoles } from '../../@helpers/dataProducts';
import { dataDiversos } from '../../@helpers/dataProducts';
import { Trash, Pencil } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function ProductsHome() {
  const allProducts = dataStarWars.concat(dataConsoles, dataDiversos);
  return (
    <>
      <section className="bg-[#E5E5E5] py-16">
        <div className="container mx-auto w-full max-w-[72rem]">
          <div className="flex justify-between items-center pb-5">
            <h1 className="text-xl font-bold">Todos os produtos</h1>
            <NavLink to="/products">
              <Button title="Adicionar produto" />
            </NavLink>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {allProducts.map((item, index) => (
              <div key={index}>
                <div className="flex mb-2 relative top-10 justify-end gap-2">
                  <button>
                    <Trash size={24} />
                  </button>
                  <button>
                    <Pencil size={24} />
                  </button>
                </div>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p className="font-bold">{item.price}</p>
                <p className="text-sm">#111111</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
