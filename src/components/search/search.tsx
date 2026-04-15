import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

import { cn } from "@/lib/utils";

export const Search = () => {
  const router = useRouter()
  const querySearch = router.query.search as string

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
      undefined,
      {
        shallow: true,
        scroll: false
      }
    )
  }

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
        type="text"
        placeholder="Buscar"
        defaultValue={querySearch}
        onChange={handleQueryChange}
        className="h-10 w-full md:w-72 text-body-sm bg-transparent border border-gray-400 rounded-lg pl-9 text-gray-100 placeholder:text-gray-300 outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300"
      />
    </form>
  )
}