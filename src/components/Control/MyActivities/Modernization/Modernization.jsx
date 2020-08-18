import React from 'react';
import SortingWrapBlock from "../../../Blocks/SortingWrapBlock/SortingWrapBlock";
import Item from "./Item/Item";
import ModernizationReduxForm from "./ModernizationForm/ModernizationForm";


const Modernization = ({items}) => {

	let Component_1 = () => (
		<ModernizationReduxForm/>
	);

	let Component_2 = () => (
		<div className='inner_1'>
			{items.map(i => <Item title={i.title} error={i.error}/>)}
		</div>
	);

	return (
		<SortingWrapBlock component_1={Component_1}
		                  component_2={Component_2}
		                  btns text/>
	)
};

export default Modernization;