interface Item {
  text: string,
  to?: string
}

export interface Props {
  breadcrumb: Array<string>
}

const Links: React.FC<Props> = ({ breadcrumb }) => {
  return breadcrumb.map(item => {
    if (typeof item === "string") {
      return (
        <li key={ item } className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
          { item }
        </li>
      )
    }

    // TODO: ADD LINK
    return
  })
}

const Breadcrumb: React.FC<Props> = ({ breadcrumb }) => (
  <nav>
    <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
      <li className="text-sm leading-normal">
        <a className="opacity-50 text-slate-700">Pages</a>
      </li>
      <Links breadcrumb={ breadcrumb }/>
    </ol>
    <h6 className="mb-0 font-bold capitalize dark:text-white">{ breadcrumb.at(-1) }</h6>
  </nav>
)

export default Breadcrumb