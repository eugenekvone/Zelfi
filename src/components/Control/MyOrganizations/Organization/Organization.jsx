import React, {useState} from 'react';
import style from './Organization.module.scss';
import cn from "classnames";
import BtnBack from "../../../Commons/Btns/BtnBack/BtnBack";
import icon_1 from "../../../../assets/img/Control/MyOrganizations/Organization/icon_1.svg";
import img_1 from "../../../../assets/img/initialState/Control/MyOrganizations/img_1.jpg";
import Info from "../../../Commons/Info/Info";
import AvatarBlock from "../../../Blocks/AvatarBlock/AvatarBlock";
import NavBlock from "../../../Blocks/NavBlock/NavBlock";
import {Redirect, Route} from "react-router-dom";
import OrganizationReduxForm from "./OrganizationForm/OrganizationForm";
import Modal from "./Modal/Modal";
import Relevant from "./Relevant/Relevant";
import Past from "./Past/Past";


const Organization = ({url, urlBack}) => {

	let [modal, setModal] = useState(false);

	let openModal = () => {
		setModal(true)
	};

	let closeModal = () => {
		setModal(false)
	};

	let nav = [
		{
			title: 'Актуальные',
			url: 'relevant'
		},
		{
			title: 'Прошедшие',
			url: 'past'
		},
	];

	let initialState = {
		relevant: [
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
		],
		past: [
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
			'Игра в баскетбол',
		],
	};

	let component = () => (<OrganizationReduxForm/>);

	return (
		<div className={cn(style.organization, "case case-1")}>
			<Redirect to={url + '/' + nav[0].url + '/'}/>
			<div className={style.block_1}>
				<div className="flex-left">
					<BtnBack link={urlBack} title={'Мероприятия'}/>
				</div>
				<div className={cn(style.btn_1, "btn-2 btn btn_height-1")}>
					<p className="text-7">Редактировать</p>
				</div>
				<div className={cn(style.btn_1, "btn-1 btn btn_height-1")} onClick={openModal}>
					<p className="text-7 text_white">Раздать права доступа</p>
				</div>
			</div>
			<div className={style.block_2}>
				<p className={cn(style.text_1, "text-3 text_purple text-5_adaptive")}>Переданные права</p>
				<div className={style.item_1}>
					<img src={icon_1} alt="icon_1"/>
				</div>
			</div>
			<div className={style.block_4}>
				<p className={cn("text-3", style.item_2)}>ivanov@mail.ru</p>
				<p className={cn("text-3", style.item_2)}>ivanov@mail.ru</p>
				<p className={cn("text-3", style.item_2)}>ivanov@mail.ru</p>
			</div>
			<div className={style.block_4}>
				<p className={cn("text-3 text_pink", style.item_2)}>Отсутствуют</p>
			</div>
			<div className={cn(style.block_3, 'item_1')}>
				<div className={style.block_3__inner_1}>
					<div className={style.block_3__block_2}>
						<AvatarBlock type={'rating'}
						             text_1={'ООО «Праздник»'}
						             size={'large'}
						             img={img_1}
						             rating={4}
						             ratingSize={'middle'}
						             link={'/organization'}/>
					</div>
					<div className={style.block_3__block_1}>
						<div className={style.block_3__item_1}>
							<Info text={'+7 (999) 888-77-66'} item={'phone'} opacity={'true'}/>
						</div>
						<div className={style.block_3__item_1}>
							<Info text={'example@mail.com'} item={'mail'} opacity={'true'}/>
						</div>
					</div>
					<p className="text-22">Олимпиада проводится для студентов 3 и 4 курсов направления «Экономика» и
						специальности «Экономическая безопасность» и предполагает решение тестовых и практических
						ситуационных заданий разного уровня сложности по дисциплинам «Бухгалтерский учет и анализ»,
						«Бухгалтерский финансовый учет», «Бухгалтерская финансовая отчетность», «Комплексный
						экономический анализ хозяйственной деятельности», «Анализ финансовой отчетности», «Аудит». К
						участию приглашается от вуза одна или две команды (отдельно 3 и 4 курсов) в количестве от 3
						до 5 человек каждая с руководителем.</p>
				</div>
				<div className={style.block_3__inner_2}>
					<div className="btn-2 btn_height-1 flex-all-center">
						<p className={cn(style.text_2, "text-21 text_pink")}>23</p>
						<p className="text-1">актуальных <br></br>мероприятий</p>
					</div>
				</div>
			</div>
			<p className={cn("text-3 text-4_adaptive", style.text_3)}>Мероприятия организции</p>
			<NavBlock nav={nav} url={url + '/'} typeSecond>
				<Route exact path={url + '/' + nav[0].url + '/'} render={() =>
					<Relevant items={initialState.relevant} component={component}/>
				}/>
				<Route exact path={url + '/' + nav[1].url + '/'} render={() =>
					<Past items={initialState.past} component={component}/>
				}/>
			</NavBlock>
			<Modal isOpen={modal} close={closeModal}/>
		</div>
	)
}

export default Organization;