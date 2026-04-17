import Image from "next/image";
import Link from "next/link";

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
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 right-0 bg-gray-600 pt-1 pr-2 pb-2 pl-3 rounded-bl-md backdrop-blur-sm">
            <span className="text-body-sm text-gray-300 ">
              {date}
            </span>
          </div>

          <Image
            src={image}
            alt="post"
            width={290}
            height={144}
            className="w-full object-cover object-center rounded-md"
          />

          <div className="my-4 space-y-2">
            <h3 className="text-heading-sm text-gray-100 font-sans">
              {title}
            </h3>

            <p className="text-body-sm text-gray-300 line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-3 border-t border-gray-400 pt-3">
            <div className="relative size-8 rounded-full border-2 border-blue-200 overflow-hidden">
              <Image
                src={author.avatar}
                alt={author.name}
                width={30}
                height={30}
                className="object-cover"
              />
            </div>

            <span className="text-body-sm text-gray-300">{author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}