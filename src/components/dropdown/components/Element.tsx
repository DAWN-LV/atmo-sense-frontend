interface Props {
  label: string,
  onClick: () => void
}

const Element: React.FC<Props> = ({ label, onClick }) => (
  <li 
    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
    onClick={ onClick }
  >
    { label }
  </li>
)

export default Element