import React, {useState} from 'react';
import style from './AppraisalBlock.module.scss';
import cn from "classnames";
import Form_1_ReduxForm from "./Form_1/Form_1";
import Form_2_ReduxForm from "./Form_2/Form_2";
import AddressBlock from "../AddressBlock/AddressBlock";
import Rating from "../../Commons/Rating/Rating";
import Modal_1 from "../../Modals/Donations/Modal_1/Modal_1";
import Modal_2 from "../../Modals/Donations/Modal_2/Modal_2";

const AppraisalBlock = ({online, padding_right}) => {

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
		<div className={cn(style.block, padding_right && style.block_padding_right)}>
			<div className={style.inner_1}>
				<AddressBlock/>
				{online && <div className={style.item_3}></div>}
			</div>
			<div className={style.inner_2}>
				<div className="flex flex-column_adaptive">
					<div className={style.item_2}>
						<p className={cn(style.text_3, "text-16 text-1_adaptive")}>Оцените мероприятие</p>
						<p className="text-4 text-1_adaptive">По желанию</p>
					</div>
					<div className={style.rating}>
						<Rating size={'big'} rating={0} change/>
					</div>
				</div>
				<Form_1_ReduxForm/>
			</div>
			<div className={style.inner_3}>
				<Form_2_ReduxForm modal={openModal_1}/>
			</div>
			<Modal_1 isOpen={modal_1} close={closeModal_1} func={openModal_2}/>
			<Modal_2 isOpen={modal_2} close={closeModal_2}/>
		</div>
	)
};

export default AppraisalBlock;