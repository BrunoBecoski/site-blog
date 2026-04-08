import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const router = useRouter()
  const isCurrentPath = 
    router.asPath === rest.href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as))

  return (
    <Link
      className={cn('text-sm font-medium transition-colors hover:text-blue-500', isCurrentPath ? 'text-blue-500' : 'text-muted' )}
      {...rest}
    >
      {children}
    </Link>
  )
}