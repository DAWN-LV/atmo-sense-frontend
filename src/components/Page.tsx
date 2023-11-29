import Breadcrumb, { Props as BreadcrumbProps } from "@/components/Breadcrumb"

type Props = BreadcrumbProps & {
  children: React.ReactNode
}

const Page: React.FC<Props> = ({ children, breadcrumb }) => (
  <>
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" id="navbarTop" navbar-scroll="true">
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <Breadcrumb breadcrumb={ breadcrumb }/>
      </div>
    </nav>
    <main className="w-full px-6 py-4 mx-auto">
      { children }
    </main>
  </>
)

export default Page