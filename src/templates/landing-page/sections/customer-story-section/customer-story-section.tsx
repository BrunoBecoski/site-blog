import { Avatar } from "@/components/avatar";

const customersStories = [
  {
    id: '7631610e-7eb0-4f1d-bdcf-6333ba6ed160',
    content: 'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
    author: {
      name: 'Annette Bones',
      role: 'CEO na Anne Corp',
      avatar: '/customer-01.png',
    }
  }, {
    id: 'cdd88ec2-66b2-4ec1-bbc4-2e9d3f545093',
    content: 'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!.',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Org',
      avatar: '/customer-02.png',
    }
  }
]

export const CustomerStorySection = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-heading-xl text-gray-100 text-center font-sans">
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customersStories.map((customer) => (
            <div key={customer.id} className="flex flex-col gap-6 justify-between rounded-xl bg-gray-500 border border-gray-400 p-6 md:p-12">
              <p className="text-balance text-gray-200 italic">
                {customer.content}
              </p>

              <Avatar.Container>
                <Avatar.Image
                  size="sm"
                  src={customer.author.avatar}
                  alt={customer.author.name}
                />

                <Avatar.Content>
                  <Avatar.Title>
                    {customer.author.name}
                  </Avatar.Title>

                  <Avatar.Description>
                    {customer.author.role}
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}