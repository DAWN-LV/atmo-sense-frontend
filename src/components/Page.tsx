import Breadcrumb, { Props as BreadcrumbProps } from "@/components/Breadcrumb"

type Props = BreadcrumbProps & {
  children: React.ReactNode,
  prepend?: React.ReactNode
}

const Page: React.FC<Props> = ({ children, prepend, breadcrumb }) => (
  <>
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" id="navbarTop" navbar-scroll="true">
      <div className="flex items-center justify-between w-full px-1 py-1 mx-auto flex-wrap-inherit">
        <Breadcrumb breadcrumb={ breadcrumb }/>
        { prepend ? (
          <div className="flex items-center">
            { prepend }
          </div>
        ) : null }
      </div>
    </nav>
    <main className="w-full px-6 py-4 mx-auto">
      { children }
    </main>
  </>
)

export default Page