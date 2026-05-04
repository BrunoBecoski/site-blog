import { SearchIcon, XCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const router = useRouter()
  const searchParams = useSearchParams()
  const querySearch = searchParams?.get('search') ?? ''
  const hasQuery = !!searchParams?.has('search')

  const handleSearch = useCallback((event: React.SubmitEvent) => {
    event.preventDefault()

    if (querySearch.trim()) {
      router.push(`/blog?search=${encodeURIComponent(querySearch)}`)
    }
  }, [querySearch, router])

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuerySearch = event.target.value;

    router.push(
      `/blog?search=${encodeURIComponent(newQuerySearch)}`,
      { scroll: false }
    )
  }

  const resetSearchInput = () => {
    router.push('/blog', { scroll: false })
  }

  useEffect(() => {
    console.log(hasQuery)
    if(hasQuery) {
      inputRef.current?.focus()
    }
  }, [hasQuery])

  return (
    <form
      onSubmit={handleSearch}
      className="relative group w-full md:w-auto"
    >
      <SearchIcon
        className={cn(
          "size-4 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-blue-200 transition-colors duration-200",
          querySearch ? "text-blue-200" : "text-gray-300"
        )}
      />

      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar"
        value={querySearch}
        onChange={handleQueryChange}
        className="h-10 w-full md:w-72 text-body-sm bg-transparent border border-gray-400 rounded-lg pl-9 text-gray-100 placeholder:text-gray-300 outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
      />

      {querySearch &&
        <XCircle 
          onClick={resetSearchInput}
          className="absolute size-4 text-gray-300 right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer hover:text-red-400 transition-colors duration-200"
        />
      }
    </form>
  )
}