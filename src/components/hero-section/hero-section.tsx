import Image from "next/image";
import { ArrowRight, Clock, Store } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 min-h-80 md:h-144 items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="text-gray-100 text-heading-hg font-sans">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-3 ">
                <Clock className="text-cyan-100 size-5" />
                <span className="text-gray-200 text-body-md">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Store className="text-cyan-100 size-5" />
                <span className="text-gray-200 text-body-md">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-5 text-white items-center md:items-start lg:items-start">
              <Button className="w-fit" asChild> 
                <Link href="/criar-loja">
                  Criar a loja grátis
                  <ArrowRight />
                </Link>
              </Button>
              <p className="text-gray-300 text-body-xs">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-80 hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image 
            src="/hero-section.svg"
            alt="Ilustração com ícones de loja"
            width={491}
            height={491}
            className="-h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}