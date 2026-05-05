import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
            <Link href="/" title="Página inicial">
              <Image 
                src="/logo.svg"
                alt="Site.Set"
                width={115}
                height={32}
              />
            </Link>

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
            <Link href="/termos-de-uso" className="hover:text-blue-200">Termos de Uso</Link>

            <Link href="/politica-de-privacidade" className="hover:text-blue-200">Politica de Privacidade</Link>

            <Link href="/enviar-feedback" className="hover:text-blue-200">Enviar Feedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}