import React from 'react';


const Points = ({items}) => {
	return (
		<div className='flex-column'>
			{items.map(i =>
				<p className="text-15 text-3_adaptive">
					<span className="text_pink text-4_adaptive">●  </span>
					{i}
				</p>
			)}
		</div>
	)
};

export default Points;