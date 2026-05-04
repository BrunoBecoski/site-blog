import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";

import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="bg-[url(/background-call-to-action.svg)] bg-cover bg-center bg-no-repeat mt-20 md:mt-40 py-20 relative">
      <div className="p-4 bg-cyan-300 rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Store className="size-8 text-cyan-100" />
      </div>

      <div className="container">
        <div className="flex flex-col items-center gap-10 text-center ">

          <h2 className=" text-heading-xl text-gray-100 text-balance font-sans max-w-md">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button asChild>
            <Link href="/criar-loja">
              Criar a loja grátis
              <span>
                <ArrowRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}