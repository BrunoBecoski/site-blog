import { Post } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

import { useShare } from "@/hooks/use-share/index";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { Markdown } from "@/components/markdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export type PostSlugProps = {
  post: Post
}

export const PostSlug = ({ post }: PostSlugProps) => {
  const publishedDate = new Date(post?.date || new Date).toLocaleDateString('pt-BR')
  const postUrl = `https://www.site.set/blog/${post.slug}`

  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  })

  return (
    <main>
      <div className="container space-y-5 md:space-y-12 px-4 md:px-8 mt-8 md:mt-20">

        <div className="flex flex-row justify-between items-center flex-wrap gap-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/blog" className="text-gray-100 text-action-sm">
                    Blog
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className=" text-gray-300" />

              <BreadcrumbItem>
                <span className="text-blue-200 text-action-sm">
                  {post.title}
                </span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex gap-2 lg:hidden ml-auto">
            {
              shareButtons.map((provider) => (
                <Button
                  key={provider.provider}
                  variant="outline"
                  onClick={provider.action}
                  className="group p-3"
                >
                  {provider.icon}
                </Button>
              ))
            }
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-2 border-gray-400">
            <figure className="relative w-full overflow-hidden aspect-30/11 rounded-t-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </figure>

            <header className="p-4 md:p-6 lg:p-12">
              <h1 className="text-gray-100 text-heading-lg md:text-heading-xl font-sans text-balance mb-6 md:mb-8">
                {post.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  size="sm"
                  src={post.author.avatar}
                  alt={post.author.name}
                />

                <Avatar.Content>
                  <Avatar.Title>
                    {post.author.name}
                  </Avatar.Title>

                  <Avatar.Description>
                    Publicado em {' '}
                    <time dateTime={post.date}>
                      {publishedDate}
                    </time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prove-invert max-w-none px-4 md:px-6 lg:px-12">
              <Markdown
                content={post.body.raw}
              />
            </div>
          </article>

          <aside className="space-y-6 hidden lg:block">
            <div className="bg-gray-700 p-4 md:p-6">
              <h2 className="mb-5 text-white text-heading-xs">
                Compartilhar
              </h2>

              <div className="space-y-3 flex flex-col">
                {
                  shareButtons.map((provider) => (
                    <Button
                      key={provider.provider}
                      variant="outline"
                      onClick={provider.action}
                      className="group justify-start gap-2"
                    >
                      {provider.icon}
                      {provider.name}
                    </Button>
                  ))
                }
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}