import React from 'react';
import SortingWrapBlock from "../../../../Blocks/SortingWrapBlock/SortingWrapBlock";
import PastItem from "../../../MyActivities/Past/Item/Item";


const Past = ({component, items}) => {

	let Items = () => (
		<div className='inner_1'>
			{items.map(i => <PastItem title={i}/>)}
		</div>
	);

	return (
		<div>
			<SortingWrapBlock component_1={component} component_2={Items} btns/>
		</div>
	)
};

export default Past;