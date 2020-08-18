import React from 'react';
import style from './Organization.module.scss';
import OrganizationReduxForm from "./OrganizationForm/OrganizationForm";
import Item from "./Item/Item";


const Organization = ({items}) => {
	return (
		<div>
			<div className={style.block_1}>
				<OrganizationReduxForm/>
			</div>
			<div className="inner_1 inner_1_adaptive">
				{items.map(i => <Item title={i}/>)}
			</div>
		</div>
	)
};

export default Organization;