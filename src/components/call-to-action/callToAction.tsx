import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";

import { Button } from "../ui/button";

export const CallToAction = () => {
  return (
    <section className="bg-[url(/call-to-action.svg)] bg-cover py-23 relative">
      <div className="container">
        <div className="flex flex-col items-center gap-10 text-center ">
          <div className="p-4 bg-cyan-300 rounded-full absolute -top-8 ">
            <Store className="size-8 text-cyan-100" />
          </div>

          <h2 className=" text-heading-xl text-gray-100 text-balance font-sans max-w-md">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button asChild>
            <Link href="/criar-loja">
              Criar a loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}