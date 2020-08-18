import React from 'react';
import SortingWrapBlock from "../../../Blocks/SortingWrapBlock/SortingWrapBlock";
import PastReduxForm from "./PastForm/PastForm";
import Item from "./Item/Item";


const Past = ({items}) => {

	let Component_1 = () => (
		<PastReduxForm/>
	);

	let Component_2 = () => (
		<div className='inner_1'>
			{items.map(i => <Item title={i} BtnCopy/>)}
		</div>
	);

	return (
		<SortingWrapBlock component_1={Component_1}
		                  component_2={Component_2}
		                  btns text/>
	)
};

export default Past;