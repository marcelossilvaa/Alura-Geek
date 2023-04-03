import { Form } from '../../components/Form'

export function Products() {
  return (
    <section className="bg-[#E5E5E5] py-16">
      <div className="container h-full mx-auto max-w-[72rem] flex justify-center">
        <form className="w-[704px]" action="">
          <h1 className="text-xl font-bold pb-3">Adicionar novo produto</h1>
          <div className="w-[704px] flex flex-col justify-center gap-4">
            <Form placeholder="URL da imagem" />
            <Form placeholder="Categoria" />
            <Form placeholder="Nome do produto" />
            <Form placeholder="Preço do produto" />
            <Form placeholder="Descrição do produto" />
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
  )
}
