import "@/styles/globals.css";

import { FileQuestion, Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 flex-col">
      <div className="max-w-md w-full text-center">
        <FileQuestion
          size={64}
          className="text-gray-100 mx-auto mb-6"
        />
      </div>

      <div className="relative inline-block mb-3 font-sans text-8xl font-bold text-white">
        <span className="inline-block transform -rotate-12 -translate-y-2 -translate-x-1">
          4
        </span>
        <span className="inline-block">0</span>
        <span className="inline-block transform rotate-12 translate-y-2 translate-x-1">
          4
        </span>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <Button asChild>
          <Link href="/">
            <span>Home</span>
          </Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link href="/blog?search=">
            <span>
              <Search size={16} />
            </span>
            Pesquisar posts
          </Link>
        </Button>
      </div>
    </div>
  )
}