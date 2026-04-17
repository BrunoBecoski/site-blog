import Head from "next/head";
import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";

import { Search } from "./components/search";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";

export function BlogList() {
  const router = useRouter()
  const querySearch = router.query.search as string
  const pageTitle = querySearch
    ? `Resultados de busca para: "${querySearch}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  const posts = allPosts

  return (
    <div className="flex flex-col py-5 md:py-20 grow h-full">
      <Head>
        <title>Site.set | Blog</title>
      </Head>

      <header className="pb-14">
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

      <PostGridCard>
        {posts.map((post) => (
          <PostCard
            key={post._id}
            slug={post.slug}
            date={new Date(post.date).toLocaleDateString('pt-BR')}
            title={post.title}
            description={post.description}
            image={post.image}
            author={{
              name: post.author.name,
              avatar: post.author.avatar
            }}
          />

        ))}
      </PostGridCard>
    </div>
  )
}