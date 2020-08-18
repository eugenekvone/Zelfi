import React from 'react';
import style from './Archive.module.scss';
import Btn_sorting from "../../../Commons/Btns/BtnSorting/BtnSorting";
import Item from "../Item/Item";
import ArchiveReduxForm from "./ArchiveForm/ArchiveForm";


const Archive = ({items}) => {
	return (
		<div>
			<div className={style.block_1}>
				<ArchiveReduxForm/>
			</div>
			<div className={style.block_2}>
				<Btn_sorting title={'Дата проведения'}/>
			</div>
			<div className='inner_1'>
				{items.map(i => <Item title={i.title} archive visited={i.visited}/>)}
			</div>
		</div>
	)
};

export default Archive;