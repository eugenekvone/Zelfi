import React from 'react';
import style from './Organization.module.scss';
import cn from "classnames";
import FixBlock from "../Blocks/FixBlock/FixBlock";
import OrganizationReduxForm from "./OrganizationForm/OrganizationForm";
import SortingBlock from "../Blocks/SortingBlock/SortingBlock";
import GridBlock from "../Blocks/GridBlock/GridBlock";
import allActivity__img_1 from "../../assets/img/initialState/allActivity/allActivity__img_1.jpg";
import allActivity__avatar_1 from "../../assets/img/initialState/allActivity/allActivity__avatar_1.jpg";
import allActivity__img_2 from "../../assets/img/initialState/allActivity/allActivity__img_2.jpg";
import allActivity__avatar_2 from "../../assets/img/initialState/allActivity/allActivity__avatar_2.jpg";
import allActivity__img_3 from "../../assets/img/initialState/allActivity/allActivity__img_3.jpg";
import allActivity__img_4 from "../../assets/img/initialState/allActivity/allActivity__img_4.jpg";
import allActivity__avatar_3 from "../../assets/img/initialState/allActivity/allActivity__avatar_3.jpg";
import allActivity__img_5 from "../../assets/img/initialState/allActivity/allActivity__img_5.jpg";
import allActivity__img_6 from "../../assets/img/initialState/allActivity/allActivity__img_6.jpg";
import allActivity__img_7 from "../../assets/img/initialState/allActivity/allActivity__img_7.jpg";
import allActivity__img_8 from "../../assets/img/initialState/allActivity/allActivity__img_8.jpg";
import {changeFavorite} from "../../redux/reducers/activity-reducer";


const Organization = () => {

	let initialState = {
		items: [
			{
				title: 'Игра в баскетбол',
				id: 1,
				img: allActivity__img_1,
				address: 'г. Казань, ул. Волкова, д. 7/29',
				date: ['21 окт. 2019 (пт)', '21 окт. 2019 (пт)', '21 окт. 2019 (пт)'],
				time: '17:00',
				organizer: {
					title: 'Coca-Cola',
					avatar: allActivity__avatar_1,
					rating: 4
				},
				favorite: false,
				free: false
			},
			{
				title: 'Профессиональное чаепитие для длинного названия',
				id: 2,
				img: allActivity__img_2,
				address: 'г. Казань, ул. Волкова, д. 7/29',
				date: ['21 окт. 2019 (пт)'],
				time: '17:00',
				organizer: {
					title: 'Антон Камолов',
					avatar: allActivity__avatar_2,
					rating: 4
				},
				favorite: true,
				free: true
			},
			{
				title: 'Концерт Руки Вверх',
				id: 3,
				img: allActivity__img_3,
				address: 'г. Казань, ул. Волкова, д. 7/29',
				date: ['21 окт. 2019 (пт)'],
				time: '17:00',
				organizer: {
					title: 'Лёха',
					avatar: '',
					rating: 4
				},
				favorite: false,
				free: false
			},
			{
				title: 'FIFA на Playstation 4',
				id: 4,
				img: allActivity__img_4,
				address: 'г. Казань, ул. Волкова, д. 7/29',
				date: ['21 окт. 2019 (пт)'],
				time: '17:00',
				organizer: {
					title: 'Тинькофф Банк',
					avatar: allActivity__avatar_3,
					rating: 4
				},
				favorite: false,
				free: false
			},
			{
				title: 'Игра в баскетбол',
				id: 5,
				img: allActivity__img_5,
				address: 'г. Казань, ул. Волкова, д. 7/29',
				date: ['21 окт. 2019 (пт)'],
				time: '17:00',
				organizer: {
					title: 'Coca-Cola',
					avatar: allActivity__avatar_1,
					rating: 4
				},
				favorite: false,
				free: false
			},
			{
				title: 'Профессиональное чаепитие для длинного названия',
				id: 6,
				img: allActivity__img_6,
				address: 'г. Казань, ул. Волкова, д. 7/29',
				date: ['21 окт. 2019 (пт)'],
				time: '17:00',
				organizer: {
					title: 'Антон Камолов',
					avatar: allActivity__avatar_2,
					rating: 4
				},
				favorite: false,
				free: true
			},
			{
				title: 'Концерт Руки Вверх',
				id: 7,
				img: allActivity__img_7,
				address: 'г. Казань, ул. Волкова, д. 7/29',
				date: ['21 окт. 2019 (пт)'],
				time: '17:00',
				organizer: {
					title: 'Лёха',
					avatar: '',
					rating: 4
				},
				favorite: false,
				free: false
			},
			{
				title: 'FIFA на Playstation 4',
				id: 8,
				img: allActivity__img_8,
				address: 'г. Казань, ул. Волкова, д. 7/29',
				date: ['21 окт. 2019 (пт)'],
				time: '17:00',
				organizer: {
					title: 'Тинькофф Банк',
					avatar: allActivity__avatar_3,
					rating: 4
				},
				favorite: false,
				free: false
			}
		]
	};

	return (
		<div>
			<div className={style.block_1}>
				<FixBlock left/>
			</div>
			<div className="container content">
				<div className={cn(style.block_2, "case")}>
					<p className={cn(style.text_1, "text-22")}>Олимпиада проводится для студентов 3 и 4 курсов
						направления «Экономика» и специальности «Экономическая безопасность» и предполагает решение
						тестовых и практических ситуационных заданий разного уровня сложности по дисциплинам
						«Бухгалтерский учет и анализ», «Бухгалтерский финансовый учет», «Бухгалтерская финансовая
						отчетность», «Комплексный экономический анализ хозяйственной деятельности», «Анализ финансовой
						отчетности», «Аудит». К участию приглашается от вуза одна или две команды (отдельно 3 и 4
						курсов) в количестве от 3 до 5 человек каждая с руководителем.</p>
					<OrganizationReduxForm/>
					<SortingBlock title={'Дата проведения'}/>
				</div>
				<h2 className={cn(style.text_2, 'h2-1')}>Мероприятия организатора</h2>
				<GridBlock items={initialState.items} changeFavorite={changeFavorite} pagination/>
			</div>
		</div>
	)
};

export default Organization;