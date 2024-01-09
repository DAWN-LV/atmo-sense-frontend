import { useMemo } from "react"
import Breadcrumb, { Props as BreadcrumbProps } from "@/components/Breadcrumb"
import { TextField } from "@/components/form"
import { debounce } from "@/utils"

type Props = BreadcrumbProps & {
  children: React.ReactNode,
  prepend?: React.ReactNode,
  onSearch?: (value: string) => void
}

const Page: React.FC<Props> = ({ children, prepend, breadcrumb, onSearch }) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    if (target) {
      onSearch && onSearch(target.value)
    }
  }

  const handleDebounce = useMemo(() => debounce(handleChange, 300), []) 
  
  return (
    <>
      <nav className="relative flex flex-col flex-wrap items-center justify-between gap-2 px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
        <div className="flex items-center justify-between w-full px-1 py-1 mx-auto flex-wrap-inherit">
          <Breadcrumb breadcrumb={ breadcrumb }/>
          { onSearch ? (
            <TextField 
              placeholder="Search..." 
              className="w-64 !m-0" 
              onChange={ handleDebounce }
            />
          ) : null }
        </div>
        <div className="flex w-full">
          { prepend ? (
            <div className="flex items-center">
              { prepend }
            </div>
          ) : null }
        </div>
      </nav>
      <main className="w-full px-6 pt-4 pb-12 mx-auto space-y-4">
        { children }
      </main>
    </>
  )
}

export default Page