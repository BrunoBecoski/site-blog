import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial">
      <Image 
        src="/logo.svg"
        alt="Site.Set"
        width={115}
        height={32}
      />
    </Link>
  )
}