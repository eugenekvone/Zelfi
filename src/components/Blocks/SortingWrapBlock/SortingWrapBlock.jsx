import React from 'react';
import style from './SortingWrapBlock.module.scss';
import cn from "classnames";
import SortingBlock from "../SortingBlock/SortingBlock";


const SortingWrapBlock = ({component_1, component_2, btns, text}) => {
	return (
		<div>
			<div className={style.block_1}>
				{component_1 && component_1()}
			</div>
			{text && <p className={cn(style.text, 'text-3')}>Список мероприятий</p>}
			{btns &&
			<div className={style.block_2}>
				<SortingBlock title={'Дата создания'}/>
			</div>
			}
			{component_2 && component_2()}
		</div>
	)
};

export default SortingWrapBlock;