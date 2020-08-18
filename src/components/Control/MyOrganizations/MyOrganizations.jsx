import React, {useState} from 'react';
import style from './MyOrganizations.module.scss';
import cn from "classnames";
import BtnSorting from "../../Commons/Btns/BtnSorting/BtnSorting";
import Paginator from "../../Commons/Paginator/Paginator";
import Item from "./Item/Item";
import {NavLink} from "react-router-dom";
import Modal_1 from "../Modals/Modal_1/Modal_1";
import Modal_2 from "../Modals/Modal_2/Modal_2";


const MyOrganizations = ({items, url}) => {

	let [modal_1, setModal_1] = useState(false);
	let [modal_2, setModal_2] = useState(false);

	let openModal_1 = () => {
		setModal_1(true)
	};
	let openModal_2 = () => {
		setModal_2(true)
	};

	let closeModal_1 = () => {
		setModal_1(false)
	};
	let closeModal_2 = () => {
		setModal_2(false)
	};

	return (
		<div>
			<div className="case case-1">
				<p className={cn('text-3 text-4_adaptive ' +
					'form__series-title-1_adaptive', style.text)}>Список моих организаций</p>
				<NavLink to='/create_organization' className={cn(style.btn, "btn btn-1 btn_height-1")}>
					<p className="text_white text-7">Создать организацию</p>
				</NavLink>
				<div className={style.block_1}>
					<BtnSorting title={'Дата создания'}/>
				</div>
				<div className='inner_1 inner_1_adaptive'>
					{items.map(i =>
						<Item title={i.title}
						      url_1={url + '/organization'}
						      contract={i.contract}
						      type={1}
						      items_2={i.items_2}
						      modal={openModal_1}/>
					)}
				</div>
			</div>
			<Paginator/>
			<Modal_1 isOpen={modal_1} close={closeModal_1} func={openModal_2}/>
			<Modal_2 isOpen={modal_2} close={closeModal_2}/>
		</div>
	)
};

export default MyOrganizations;