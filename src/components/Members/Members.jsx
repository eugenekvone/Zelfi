import React, {useState} from 'react';
import style from './Members.module.scss';
import cn from "classnames";
import Title from "../Commons/Title/Title";
import icon_1 from "../../assets/img/Members/icon_1.svg";
import icon_2 from "../../assets/img/Members/icon_2.svg";
import Info from "../Commons/Info/Info";
import MembersReduxForm from "./MembersForm/MembersForm";
import Paginator from "../Commons/Paginator/Paginator";
import Item from "./Item/Item";
import BtnBack from "../Commons/Btns/BtnBack/BtnBack";
import Modal from "./Modal/Modal";


const Members = () => {

	let [modal, setModal] = useState(true);

	let openModal = () => {
		setModal(true)
	};
	let closeModal = () => {
		setModal(false)
	};

	let initialState = {
		items: [
			{
				id: 1,
				confirm: true,
			},
			{
				id: 2,
				confirm: false,
			},
			{
				id: 3,
				confirm: false,
			},
			{
				id: 4,
				confirm: false,
			},
			{
				id: 5,
				confirm: false,
			},
			{
				id: 6,
				confirm: false,
			},
			{
				id: 7,
				confirm: false,
			},
			{
				id: 8,
				confirm: false,
			},
		],
	};

	return (
		<div className={style.members}>
			<div className='content container'>
				<Title title={'Список участников'}/>
				<div className={style.item_1}>
					<BtnBack link={'/activity'} title={'Мероприятие «Чайная церемония»'}/>
				</div>
				<p className={cn("text-3 active_adaptive", style.item_3)}>27.11.2019</p>
				<div className={cn(style.block_1, 'case case_2 none_adaptive')}>
					<div className={cn(style.block_1__inner, "form__series form__series-1")}>
						<div className='flex-ver-center input-item-1'>
							<Info item={'date_text'} text={'27.11.2019'} textClass={'text-3'} margin_right/>
							<Info item={'time'} text={'18:30'} textClass={'text-3'}/>
						</div>
						<div className="btn btn-1 btn_height-1">
							<img src={icon_1} alt="icon_1" className='btn__icon_left'/>
							<p className="text-7 text_white">Скачать cписок участников</p>
						</div>
					</div>
				</div>
				<div className={cn(style.block_2, 'case')}>
					<div className={style.item_2}>
						<img src={icon_2} alt="icon_2" className={style.item_2__icon}/>
						<p className={cn(style.item_2__text, "text-27 text-3_adaptive")}>
							Зайдите в свой профиль с мобильного телефона, откройте камеру и отсканируйте QR-код
							участника для быстрой регистрации»
						</p>
					</div>
					<MembersReduxForm/>
				</div>
				<div className={style.block_3}>
					{initialState.items.map(i =>
						<Item id={i.id} confirm={i.confirm}/>
					)}
				</div>
				<Paginator/>
			</div>
			<div className='block_back block_back_full block_back_transfusion'></div>
			<Modal isOpen={modal} close={closeModal}/>
		</div>
	)
};

export default Members;