import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../../../../components/ui/button";

export const FeatureSection = () => {
  return (
    <section className="container bg-gray-700 grid gap-6 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-4 bg-gray-500 p-6 rounded-xl md:p-12">
        <span className="text-body-tag uppercase text-blue-200 bg-blue-400 px-3 py-1.5 rounded-sm w-fit">
          simples
        </span>
        <h2 className="text-heading-lg text-gray-100 font-sans">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className="flex flex-col gap-4 bg-gray-500 p-6 rounded-xl md:p-12">
        <span className="text-body-tag uppercase text-blue-200 bg-blue-400 px-3 py-1.5 rounded-sm w-fit">
          prático
        </span>
        <h2 className="text-heading-lg text-gray-100 font-sans">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag uppercase text-blue-200 bg-blue-400 px-3 py-1.5 rounded-sm w-fit">
              personalizável
            </span>
            <h2 className="text-heading-lg text-gray-100 font-sans max-w-md">
              Tenha uma loja online personalizada com a cara da sua marca
            </h2>

            <Button className="md:w-fit hidden mt-4 md:mt-auto md:flex" asChild>
              <Link href="/criar-loja">
                Criar a loja grátis
                <span>
                  <ArrowRight />
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt="Features"
                width={440}
                height={327}
                className="object-cover w-full"
              />
            </div>

            <Button className="w-full gap-2 mt-4 md:hidden md:mt-auto " asChild>
              <Link href="/criar-loja">
                Criar a loja grátis
                <span>
                  <ArrowRight />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}