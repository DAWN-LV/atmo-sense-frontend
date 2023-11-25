import TextField from "@/components/form/TextField"

interface Props {
  children: React.ReactNode,
  breadcrumb?: Array<string>
}

const Breadcrumb : React.FC<{ breadcrumb?: string[] }> = ({ breadcrumb }) => {
  if (!Array.isArray(breadcrumb)) {
    return <div/>
  }

  return (
    <nav>
      <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
        <li className="text-sm leading-normal">
          <a className="opacity-50 text-slate-700">Pages</a>
        </li>
        {breadcrumb.map(segment => (
          <li key={ segment } className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">{ segment }</li>
        ))}
      </ol>
      <h6 className="mb-0 font-bold capitalize">{ breadcrumb.at(-1) }</h6>
    </nav>
  )
}

const Page: React.FC<Props> = ({ children, breadcrumb }) => (
  <>
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" id="navbarTop" navbar-scroll="true">
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <Breadcrumb breadcrumb ={ breadcrumb }/>
        {/* <TextField placeholder="Search here..."/> */}
      </div>
    </nav>
    <main className="w-full px-6 py-4 mx-auto">
      { children }
    </main>
  </>
)

export default Page