import React from 'react';
import Item from "./Item/Item";


const Points = ({items}) => {
	return (
		<div className='inner_1 inner_1_adaptive'>
			{items.map(i => <Item title={i}/>)}
		</div>
	)
};

export default Points;