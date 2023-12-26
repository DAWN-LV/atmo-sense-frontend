import React from 'react'

interface Props {
	ranges: Array<{ label: string, value: number }>,
	activeRange: number,
	onSelect: (v: number) => void
}

const RangeSelector: React.FC<Props> = ({ ranges, activeRange, onSelect }) => {
	return (
		<div className='inline-flex rounded-md shadow-sm' role='group'>
			{ranges.map((el, i) => (
				<button
					key={el.label}
					className={`
						${i === 0 ? 'rounded-s-lg' : i === ranges.length - 1 ? 'rounded-e-lg' : ''} 
						px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 
						focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700
					`}
					onClick={() => onSelect(i)}
				>
					{el.label}
				</button>
			))}
		</div>
	)
}

export default RangeSelector
