import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const router = useRouter()
  const isCurrentPath = router.asPath === rest.href || router.asPath === rest.as

  return (
    <Link
      className={cn('text-action-sm transition-colors', isCurrentPath ? 'text-blue-200 hover:text-blue-200' : 'text-gray-100 hover:text-blue-100' )}
      {...rest}
    >
      {children}
    </Link>
  )
}