import Head from "next/head";
import { useRouter } from "next/router";

import { Search } from "./components/search";
import { PostCard } from "./components/post-card";

export function BlogList() {
  const router = useRouter()
  const querySearch = router.query.search as string
  const pageTitle = querySearch 
    ? `Resultados de busca para: "${querySearch}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  return (
    <div className="flex flex-col py-5 md:py-20 grow h-full">
      <Head>
        <title>Site.set | Blog</title>
      </Head>

      <header>
        <div className="container space-y-6 md:space-y-0 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="uppercase text-body-tag text-cyan-100 bg-cyan-300 py-2 px-3 w-fit rounded-sm">
              blog
            </span>

            <h1 className="text-heading-lg md:text-heading-xl text-gray-100 font-sans text-balance md:text-left max-w-2xl">
              {pageTitle}
            </h1>
          </div>
          
          <Search />
        </div>
      </header>

      <PostCard
      slug="transformando-seu-negocio-em-uma-loja-virtual"
        date="20/12/2024"
        title="Transformando seu negócio em uma loja virtual"
        description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
        image="/assets/primeiro-post.png"
        author={{
          name: 'Aspen Dokidis',
          avatar: '/customer-03.png',
        }}
      />
    </div>
  )
}