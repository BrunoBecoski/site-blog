export default function BlogPage() {
  return (
    <div className="flex flex-col py-5 md:py-20 grow h-full">
      <header>
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className="uppercase text-body-tag text-cyan-100 bg-cyan-300 py-2 px-3 w-fit rounded-sm">
              blog
            </span>

            <h1 className="text-heading-lg md:text-heading-xl text-gray-100 font-sans text-balance md:text-left max-w-2xl">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>
        </div>
      </header>
    </div>
  )
}