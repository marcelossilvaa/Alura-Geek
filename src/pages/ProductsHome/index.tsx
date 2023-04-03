import { Button } from '../../components/Button'
import { dataStarWars } from '../../components/Cards/StarWars'
import { dataConsoles } from '../../components/Cards/Consoles'
import { dataDiversos } from '../../components/Cards/Diversos'
import { Trash, Pencil } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function ProductsHome() {
  const allProducts = dataStarWars.concat(dataConsoles, dataDiversos)
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
                <div className="mb-2">
                  <Trash size={24} />
                  <Pencil size={24} />
                  <img src={item.image} alt="" />
                </div>
                <p>{item.name}</p>
                <p className="font-bold">{item.price}</p>
                <p className="text-sm">#111111</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
