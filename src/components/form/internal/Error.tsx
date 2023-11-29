const Error: React.FC<{ error?: string }> = ({ error }) => (
  <div className="mt-2 text-red-600 text-sm">{ error }</div>
)

export default Error