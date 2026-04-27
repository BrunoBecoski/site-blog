import Head from "next/head";
import { useRouter } from "next/router";
import { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";

import { Search } from "./components/search";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";

export type BlogListProps = {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  const router = useRouter()
  const querySearch = router.query.search as string
  const pageTitle = querySearch
    ? `Resultados de busca para: "${querySearch}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  const postList = querySearch
    ? posts.filter((post) =>
      post.title.toLocaleLowerCase().includes(querySearch)
    )
    : posts

  const hasPosts = postList.length > 0

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

      {hasPosts &&
        <PostGridCard>
          {postList.map((post) => (
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
      }

      {!hasPosts &&
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 border-2 border-dashed border-gray-300 p-8 md:p-12 rounded-lg">
            <Inbox className="size-12 text-cyan-100" />
            <h2 className="text-heading-md text-gray-200 font-sm text-center">Nenhum post encontrado.</h2>
          </div>
        </div>
      }
    </div>
  )
}