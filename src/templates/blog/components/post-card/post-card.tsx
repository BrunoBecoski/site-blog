import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/components/avatar";

type AuthorProps = {
  name: string
  avatar: string
}

type PostCardProps = {
  slug: string
  date: string
  title: string
  description: string
  image: string
  author: AuthorProps
}

export const PostCard = ({
  slug,
  date,
  title,
  description,
  image,
  author
}: PostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl rounded-xl border-2 border-gray-400 hover:border-blue-300 bg-gray-600 overflow-hidden transition-all duration-300"
    >
      <div className="p-2 rounded-md overflow-hidden border h-full flex flex-col">
        <div className="relative">
          <div className="absolute top-0 right-0 bg-gray-600 pt-1 pr-2 pb-2 pl-3 rounded-bl-md backdrop-blur-sm">
            <span className="text-body-sm text-gray-300 ">
              {date}
            </span>
          </div>
        </div>

        <Image
          src={image}
          alt="post"
          width={290}
          height={144}
          className="w-full object-cover rounded-md aspect-145/72"
        />

        <div className="my-4 space-y-2 flex-1">
          <h3 className="text-heading-sm text-gray-100 font-sans">
            {title}
          </h3>

          <p className="text-body-sm text-gray-300 line-clamp-2">
            {description}
          </p>
        </div>

        <Avatar.Container>
          <Avatar.Image
            size="xs"
            src={author.avatar}
            alt={author.name}
          />
          <Avatar.Content>
            <Avatar.Title>
              {author.name}
            </Avatar.Title>
          </Avatar.Content>
        </Avatar.Container>
      </div>
    </Link>
  )
}