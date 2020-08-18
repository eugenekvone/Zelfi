import React, {useState} from 'react';
import style from './OutputMeans.module.scss';
import cn from "classnames";
import BtnSorting from "../../Commons/Btns/BtnSorting/BtnSorting";
import ContractBlock from "../../Blocks/ContractBlock/ContractBlock";
import Modal_1 from "../Modals/Modal_1/Modal_1";
import Modal_2 from "../Modals/Modal_2/Modal_2";


const OutputMeans = ({items, url_1, url_2}) => {

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
		<div className={cn("case case-1", style.output_means)}>
			<div className={cn(style.block_1, 'none_adaptive')}>
				<BtnSorting title={'Дата создания'}/>
			</div>
			<div className="inner_1 inner_1_adaptive">
				{items.map(i =>
					<ContractBlock title={i.title}
					               contract={i.contract}
					               url_1={url_1}
					               url_2={url_2}
					               items_1={i.items_1}
					               items_2={i.items_2}
					               type={2}
					               modal={openModal_1}/>
				)}
			</div>
			<Modal_1 isOpen={modal_1} close={closeModal_1} func={openModal_2}/>
			<Modal_2 isOpen={modal_2} close={closeModal_2}/>
		</div>
	)
};

export default OutputMeans;