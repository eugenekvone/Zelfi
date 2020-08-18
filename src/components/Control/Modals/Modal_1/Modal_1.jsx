import React from 'react';
import cn from "classnames";
import ModalItem from "react-modal";
import style from './Modal_1.module.scss';
import Modal_1_ReduxForm from "./Modal_1_Form/Modal_1_Form";


const Modal_1 = ({isOpen, close, func}) => {

	let send = () => {
		close();
		func();
	};

	return (
		<ModalItem
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className={cn(style.modal, 'modal-3 modal')}
			overlayClassName="overlay">
			<div className={style.block_1}>
				<div className='flex-hor-center relative'>
					<div className={style.item_1}>
						<p className="text-24 text_white text-5_adaptive">1</p>
					</div>
					<div className={style.line}></div>
				</div>
				<div className={style.block_2}>
					<div className={style.block_5}>
						<p className={cn("text-3 text-5_adaptive", style.text_1)}>Вывод средств</p>
						<p className="text-35 text-3_adaptive">
							Расчетный счет 12345678989272389868<br></br>
							Банк: Отделение «Банк» №1234 г.Казань<br></br>
							Кор. счет: 12345678909876543217<br></br>
							БИК 123456789<br></br>
						</p>
					</div>
				</div>
			</div>
			<div className={style.block_1}>
				<div className='flex-hor-center relative'>
					<div className={style.item_1}>
						<p className="text-24 text_white text-5_adaptive">2</p>
					</div>
					<div className={style.line}></div>
				</div>
				<div className={style.block_2}>
					<div className={style.block_5}>
						<div className={style.block_3}>
							<Modal_1_ReduxForm/>
						</div>
						<p className="text-4 text-3_adaptive">Минимальная сумма вывода 1000 ₽</p>
					</div>
				</div>
			</div>
			<div className={style.block_1}>
				<div className='flex-hor-center relative'>
					<div className={style.item_1}>
						<p className="text-24 text_white text-5_adaptive">3</p>
					</div>
					<div className={style.line}></div>
				</div>
				<div className={style.block_2}>
					<div className={style.block_5}>
						<p className={cn("text-3 text-5_adaptive", style.text_1)}>Скачайте, заполните и подпишите
							акт</p>
						<p className={cn('text-11 text-3_adaptive', style.text_3)}>Мы подготовили бланк акта с указанной
							суммой и реквизитами.
							Акт необходимо подписать и поставить печать (если она есть)</p>
						<div className={cn("btn-2 btn btn_height-1", style.btn)}>
							<p className="text-7">Скачать акт</p>
						</div>
					</div>
				</div>
			</div>
			<div className={style.block_1}>
				<div className='flex-hor-center relative'>
					<div className={style.item_1}>
						<p className="text-24 text_white text-5_adaptive">4</p>
					</div>
					<div className={style.line}></div>
				</div>
				<div className={style.block_2}>
					<div className={style.block_5}>
						<p className={cn("text-3 text-5_adaptive", style.text_1)}>Загрузите и отправьте копию акта</p>
						<p className={cn('text-11 text-3_adaptive', style.text_3)}>Отсканируйте или сфотографируйте
							копию подписанного акта, загрузите и нажмите кнопку "Отправить"</p>
						<div className={cn("btn-2 btn btn_height-1", style.btn)}>
							<p className="text-7">Загрузить копию</p>
						</div>
					</div>
				</div>
			</div>
			<div className={style.block_4}>
				<div className='flex-hor-center relative'>
					<div className={style.item_1}>
						<p className="text-24 text_white text-5_adaptive">5</p>
					</div>
					<div className={style.line}></div>
				</div>
				<div className="flex-ver-center grid_adaptive form__series-1_adaptive">
					<div className={cn("btn btn-1 btn_height-1", style.btn)} onClick={send}>
						<p className="text-7 text_white">Отправить</p>
					</div>
					<div className={cn("btn btn-2 btn_height-1 flex-right", style.btn)} onClick={close}>
						<p className="text-7">Отмена</p>
					</div>
				</div>
			</div>
		</ModalItem>
	)
};

export default Modal_1;