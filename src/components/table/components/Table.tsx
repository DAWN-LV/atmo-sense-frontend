import { classNames } from "@/utils"

type Props = React.HTMLAttributes<HTMLTableElement> & {
  columns: string[]
}

const Table: React.FC<Props> = ({ ...props }) => (
  <div { ...props } className={ classNames("relative overflow-x-auto rounded-lg", props.className) }>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
        <tr>
          {props.columns.map(column => (
            <th key={ column } scope="col" className="px-6 py-3">
              { column }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        { props.children }
      </tbody>
    </table>
  </div>
)

export default Table