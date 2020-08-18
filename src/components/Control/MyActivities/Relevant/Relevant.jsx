import React from 'react';
import SortingWrapBlock from "../../../Blocks/SortingWrapBlock/SortingWrapBlock";
import RelevantReduxForm from "./RelevantForm/RelevantForm";
import Item from "./Item/Item";


const Relevant = ({items, mainLink}) => {

	let Component_1 = () => (
		<RelevantReduxForm/>
	);

	let Component_2 = () => (
		<div className='inner_1'>
			{items.map(i => <Item title={i} BtnCopy url={mainLink}/>)}
		</div>
	);

	return (
		<SortingWrapBlock component_1={Component_1}
		                  component_2={Component_2}
		                  btns/>
	)
};

export default Relevant;