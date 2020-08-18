import React from 'react';
import style from './SortingBlock.module.scss';
import BtnSet from "../../Commons/Btns/BtnSet/BtnSet";
import BtnSorting from "../../Commons/Btns/BtnSorting/BtnSorting";


const SortingBlock = ({title}) => {
	return (
		<div className={style.block}>
			<div className={style.item}>
				<BtnSet/>
			</div>
			<BtnSorting title={title}/>
		</div>
	)
};

export default SortingBlock;