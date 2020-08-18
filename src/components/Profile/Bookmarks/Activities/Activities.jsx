import React from 'react';
import style from './Activities.module.scss';
import ActivitiesForm from "./ActivitiesForm/ActivitiesForm";
import Item from "./Item/Item";


const Activities = ({items}) => {
	return (
		<div>
			<div className={style.block}>
				<ActivitiesForm/>
			</div>
			<div className='inner_1 inner_1_adaptive'>
				{items.map(i => <Item title={i}/>)}
			</div>
		</div>
	)
};

export default Activities;