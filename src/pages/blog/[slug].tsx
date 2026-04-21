import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { Inbox } from "lucide-react";

import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function PostPage() {
  const router = useRouter()
  const slug = router.query.slug as string
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug?.toLowerCase())
  const publishedDate = new Date(post?.date || new Date).toLocaleDateString('pt-BR')

  return (
    <main>
      {post &&
        <div className="container space-y-12 px-4 md:px-8 mt-8 md:mt-20">
          <Breadcrumb className="">
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

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
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
          </div>
        </div>
      }

      {!post &&
        <div className="container px-8 mt-20">
          <div className="flex flex-col items-center justify-center gap-8 border-2 border-dashed border-gray-300 p-8 md:p-12 rounded-lg">
            <Inbox className="size-12 text-cyan-100" />
            <h2 className="text-heading-md text-gray-200 font-sm text-center">Post não encontrado.</h2>
          </div>
        </div>
      }
    </main>
  )
}