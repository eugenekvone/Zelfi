import React, {useEffect, useRef, useState} from 'react';
import style from './FixBlock.module.scss';
import cn from "classnames";
import img_1 from "../../../assets/img/initialState/Block_24/img_1.jpg";
import img_2 from "../../../assets/img/initialState/Block_24/img_2.jpg";
import img_3 from "../../../assets/img/initialState/Block_24/img_3.jpg";
import img_4 from "../../../assets/img/initialState/Block_24/img_4.png";
import icon_1 from "../../../assets/img/Blocks/Block_24/icon_1.svg";
import icon_3 from "../../../assets/img/Blocks/Block_24/icon_3.svg";
import Info from "../../Commons/Info/Info";
import MajorityBlock from "../MajorityBlock/MajorityBlock";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import {NavLink} from "react-router-dom";
import Bookmark from "../../Commons/Bookmark/Bookmark";
import Modal_1 from "../../Modals/Confirmation/Modals/Modal_1/Modal_1";
import Modal_2 from "../../Modals/Confirmation/Modals/Modal_2/Modal_2";
import Modal_3 from "../../Modals/Confirmation/Modals/Modal_3/Modal_3";
import {NumbFormat} from "../../../utils/NumbFormat";
import Modal_4 from "../../Modals/Donations/Modal_1/Modal_1";
import Modal_5 from "../../Modals/Donations/Modal_2/Modal_2";
import AllDates from "../../Commons/AllDates/AllDates";


const FixBlock = ({completed, organizer, left}) => {

	let [modal_1, setModal_1] = useState(false);
	let [modal_2, setModal_2] = useState(false);
	let [modal_3, setModal_3] = useState(false);
	let [modal_4, setModal_4] = useState(false);
	let [modal_5, setModal_5] = useState(false);

	let openModal_1 = () => {
		setModal_1(true)
	};
	let openModal_2 = () => {
		setModal_2(true)
	};
	let openModal_3 = () => {
		setModal_3(true)
	};
	let openModal_4 = () => {
		setModal_4(true)
	};
	let openModal_5 = () => {
		setModal_5(true)
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
	let closeModal_4 = () => {
		setModal_4(false)
	};
	let closeModal_5 = () => {
		setModal_5(false)
	};

	const fixBlock = useRef(null);
	const fixBlockWrap = useRef(null);
	const fixBlockInner = useRef(null);


	useEffect(() => {
		if (window.innerWidth > 1058) {
			if (!left) {
				const fixBlockRight = (window.innerWidth - fixBlockWrap.current.getBoundingClientRect().right + 'px');
				window.addEventListener('scroll', function () {
					if (fixBlock.current !== null) {
						if (window.pageYOffset > 1315) {
							fixBlock.current.classList.add('fixBlockBottom');
							fixBlockInner.current.classList.add('position_unset');
							fixBlockWrap.current.classList.add('position_unset');
							fixBlock.current.style.top = '1199px';
						} else {
							fixBlock.current.classList.remove('fixBlockBottom');
							fixBlock.current.style.top = '0px';

							fixBlockInner.current.classList.remove('position_unset');
							fixBlockWrap.current.classList.remove('position_unset');
						}

						if (fixBlockWrap.current.getBoundingClientRect().top <= 0) {
							fixBlock.current.classList.add('fixBlock');
							fixBlock.current.classList.remove('fixBlock_stop');
						} else {
							fixBlock.current.classList.remove('fixBlock');
							fixBlock.current.classList.add('fixBlock_stop');
							fixBlock.current.style.top = '0px';
							fixBlock.current.style.right = fixBlockRight;
						}
					}
				})
			}
		}
	});

	function blockLeft() {
		if (left) return style.block_left
	}

	return (
		<div className={cn(style.block, blockLeft())}>
			<div className={cn(style.inner_1, 'img_center-wrap')}>
				<img src={img_2} alt="img_2" className={cn(style.img_2, 'img_center-width')}/>
				<img src={img_1} alt="img_1" className={cn(style.img_1, 'img_center-width')}/>
			</div>
			<div className={cn(style.inner_2, "container flex-top")} ref={fixBlockWrap}>
				<div className="relative flex" ref={fixBlockInner}>
					<div className={style.block_1} ref={fixBlock}>
						{!left ?
							<div>
								<div className={style.block_1_inner}>
									{completed &&
									<div className={cn(style.btn_4, "btn btn-3 btn_height-3 click_disabled")}>
										<p className="text-7 text_white">Завершено</p>
									</div>}
									<p className={cn(style.title_1, 'h2-2')}>Чайный заголовок —
										писать не длиннеe трёх строк</p>
									<div className={cn(style.item_1, style.item_margin_1)}>
										<Info item='address' text={'г. Казань, ул. Волкова, д. 7/29'} opacity={'true'}
										      textClass={'text-8'}/>
									</div>
									<AllDates/>
									{!organizer &&
									<div>
										<p className={cn("text-7", style.text_margin_1)}>Контакты</p>
										<div className={cn(style.item_1, style.item_margin_2)}>
											<Info item='phone' text={'+7 (999) 888-77-66'} opacity={'true'}/>
										</div>
										<div className={cn(style.item_1, style.item_margin_3)}>
											<Info item='mail' text={'example@mail.com'} opacity={'true'}/>
										</div>
									</div>}
									{!completed &&
									<div className={cn(style.item_2, style.item_margin_4)}>
										<p className={cn(style.text_margin_2, "text-3 text-1_adaptive")}>Стоимость:</p>
										<p className="text-12 text-9_adaptive">от <span>{NumbFormat(1490)}</span> ₽</p>
									</div>}
									{organizer &&
									<div className={cn(style.btn_5, 'btn btn_height-2')} onClick={openModal_1}>
										<div className={style.btn_5_icon}>
											<img src={icon_3} alt="icon_3"/>
										</div>
										<p className={cn(style.btn_5_text, "text-7 text_purple")}>Вы организатор этого
											мероприятия?</p>
									</div>}
									{!organizer && !completed &&
									<div>
										<div
											className={cn(style.item_1, style.item_margin_3, style.item_6, 'flex-column_adaptive')}>
											<NavLink to='/buy' className={cn(style.btn_2, "btn btn-1 btn_height-1")}>
												<p className="text-7 text_white">Купить билет</p>
											</NavLink>
											<p className="text-13 text_pink text-5_adaptive">+ {NumbFormat(100)} z</p>
										</div>
										<div className={style.item_margin_4}>
											<AvatarBlock rating={4}
											             img={img_3}
											             text_1={'Coca-Cola'}
											             text_1_Class={'text-2'}
											             type={'organizer'}
											             size={'small'}
											             link={'/organization'}/>
										</div>
									</div>}
									{!completed ?
										<div className={style.item_1}>
											<div className={cn(style.btn_3, 'click_reaction')}>
												<img src={icon_1} alt="icon_1"/>
											</div>
											<div className={cn(style.btn_3, 'click_reaction')}>
												<Bookmark/>
											</div>
										</div>
										:
										<div>
											<div
												className={cn(style.item_1, style.item_margin_3, 'flex-column_adaptive')}>
												<div onClick={openModal_4}
												     className={cn(style.btn_2, "btn btn-1 btn_height-1")}>
													<p className="text-7 text_white">Поддержать организатора</p>
												</div>
												<p className="text-13 text_pink text-5_adaptive">+ {NumbFormat(100)} z</p>
											</div>
											<div className={style.item_margin_4}>
												<AvatarBlock rating={4}
												             img={img_3}
												             text_1={'Coca-Cola'}
												             text_1_Class={'text-2'}
												             type={'organizer'}
												             size={'small'}
												             link={'/organization'}/>
											</div>
										</div>
									}
								</div>
								<div className={style.item_3}>
									<MajorityBlock/>
								</div>
							</div>
							:
							<div className={style.block_1_inner}>
								<div className={style.item_4}>
									<img src={img_4} alt="img_4"/>
								</div>
								<p className={cn(style.title_2, 'h2-2')}>ООО «Праздник»</p>
								<div
									className={cn(style.item_5, style.item_margin_5, 'btn_height-1 btn-2 click_reaction')}>
									<p className={cn(style.text_margin_3, "text-21 text_pink")}>23</p>
									<p className="text-1">актуальных <br></br>мероприятия</p>
								</div>
								<div>
									<p className={cn("text-7", style.text_margin_1)}>Контакты</p>
									<div className={cn(style.item_1, style.item_margin_2)}>
										<Info item='phone' text={'+7 (999) 888-77-66'} opacity={'true'}/>
									</div>
									<div className={cn(style.item_1, style.item_margin_3)}>
										<Info item='mail' text={'example@mail.com'} opacity={'true'}/>
									</div>
								</div>
								<div className={cn(style.item_1, style.item_margin_4)}>
									<div className={cn(style.btn_3, 'click_reaction')}>
										<Bookmark/>
									</div>
								</div>
								<p className={cn(style.text_2, "text-1")}>Зарегистрирована на сайте 15.11.2019</p>
							</div>
						}
					</div>
				</div>
			</div>
			<Modal_1 isOpen={modal_1} close={closeModal_1} func={openModal_2}/>
			<Modal_2 isOpen={modal_2} close={closeModal_2}/>
			<Modal_3 isOpen={modal_3} close={closeModal_3}/>
			<Modal_4 isOpen={modal_4} close={closeModal_4} func={openModal_5}/>
			<Modal_5 isOpen={modal_5} close={closeModal_5}/>
		</div>
	)
};

export default FixBlock;