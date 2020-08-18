import React, {useState} from 'react';
import style from './InquiriesActivity.module.scss';
import cn from "classnames";
import BtnBack from "../../../../Commons/Btns/BtnBack/BtnBack";
import Item from "./Item/Item";
import img from "../../../../../assets/img/initialState/InquiriesActivity/img.jpg";
import Link from "../../../../Commons/Link/Link";
import InfoBlock from "../../../../Blocks/InfoBlock/InfoBlock";
import Modal_1 from "../../../../Modals/Confirmation/Modals/Modal_1/Modal_1";
import Modal_2 from "../../../../Modals/Confirmation/Modals/Modal_2/Modal_2";
import Modal_3 from "../../../../Modals/Confirmation/Modals/Modal_3/Modal_3";


const InquiriesActivity = ({url}) => {

	let [modal_1, setModal_1] = useState(false);
	let [modal_2, setModal_2] = useState(false);
	let [modal_3, setModal_3] = useState(false);

	let openModal_1 = () => {
		setModal_1(true)
	};
	let openModal_2 = () => {
		setModal_2(true)
	};
	let openModal_3 = () => {
		setModal_3(true)
	};

	let closeModal_1 = () => {
		setModal_1(false)
	};
	let closeModal_2 = () => {
		setModal_2(false)
	};
	let closeModal_3 = () => {
		setModal_3(false)
	};

	let initialState = {
		items: [
			{
				title: 'ООО «Праздник»',
				img: img,
				modal: openModal_1,
			},
			{
				title: 'ООО «Праздник»',
				img: img,
				modal: openModal_3,
			}
		]
	};

	return (
		<div>
			<div className={style.block_1}>
				<BtnBack link={url} title={'В список запросов на присвоение мероприятий'}/>
			</div>
			<div className={cn(style.block_2, "inner_2")}>
				{initialState.items.map(i =>
					<Item title={i.title} img={i.img} modal={i.modal}/>
				)}
			</div>
			<div className={style.block_3}>
				<p className="text-28">Мероприятие</p>
				<div className="flex-right flex-left_adaptive">
					<Link title={'Показать на странице'} link={'/activity'} icon_big/>
				</div>
			</div>
			<InfoBlock minimal/>
			<Modal_1 isOpen={modal_1} close={closeModal_1} func={openModal_2}/>
			<Modal_2 isOpen={modal_2} close={closeModal_2}/>
			<Modal_3 isOpen={modal_3} close={closeModal_3}/>
		</div>
	)
};

export default InquiriesActivity;