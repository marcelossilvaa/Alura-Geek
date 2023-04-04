import { Input } from '../../components/Input';

interface ProductsProps {
  url: string;
  category: string;
  name: string;
  price: number;
  description: string;
}

export function Products() {
  return (
    <section className="bg-[#E5E5E5] py-16">
      <div className="container h-full mx-auto max-w-[72rem] flex justify-center">
        <form>
          <h1 className="text-xl font-bold pb-3">Adicionar novo produto</h1>
          <div className="w-[559px] flex flex-col justify-center gap-4">
            <Input label="URL da imagem" inputId="url" />
            <Input label="Categoria" inputId="cat" />
            <Input label="Nome do produto" inputId="name" />
            <Input label="Preço do produto" inputId="price" />
            <Input label="Descrição do produto" inputId="desc" />
            <button
              className={
                'w-full h-[63.13px] p-4 transition duration-150 bg-blue-500  text-white hover:bg-blue-200'
              }
            >
              Adicionar produto
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
