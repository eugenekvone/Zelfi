import allActivity__img_1 from "../../assets/img/initialState/allActivity/allActivity__img_1.jpg";
import allActivity__img_2 from "../../assets/img/initialState/allActivity/allActivity__img_2.jpg";
import allActivity__img_3 from "../../assets/img/initialState/allActivity/allActivity__img_3.jpg";
import allActivity__img_4 from "../../assets/img/initialState/allActivity/allActivity__img_4.jpg";
import allActivity__img_5 from "../../assets/img/initialState/allActivity/allActivity__img_5.jpg";
import allActivity__img_6 from "../../assets/img/initialState/allActivity/allActivity__img_6.jpg";
import allActivity__img_7 from "../../assets/img/initialState/allActivity/allActivity__img_7.jpg";
import allActivity__img_8 from "../../assets/img/initialState/allActivity/allActivity__img_8.jpg";
import allActivity__img_9 from "../../assets/img/initialState/allActivity/allActivity__img_9.jpg";
import allActivity__img_10 from "../../assets/img/initialState/allActivity/allActivity__img_10.jpg";
import allActivity__img_11 from "../../assets/img/initialState/allActivity/allActivity__img_11.jpg";
import allActivity__img_12 from "../../assets/img/initialState/allActivity/allActivity__img_12.jpg";
import recommendActivity__img_1 from "../../assets/img/initialState/recommendActivity/recommendActivity__img_1.jpg";
import recommendActivity__img_2 from "../../assets/img/initialState/recommendActivity/recommendActivity__img_2.jpg";
import recommendActivity__img_3 from "../../assets/img/initialState/recommendActivity/recommendActivity__img_3.jpg";
import recommendActivity__img_4 from "../../assets/img/initialState/recommendActivity/recommendActivity__img_4.jpg";
import allActivity__avatar_1 from "../../assets/img/initialState/allActivity/allActivity__avatar_1.jpg";
import allActivity__avatar_2 from "../../assets/img/initialState/allActivity/allActivity__avatar_2.jpg";
import allActivity__avatar_3 from "../../assets/img/initialState/allActivity/allActivity__avatar_3.jpg";

const SET_ALL_ACTIVITY = 'SET_ALL_ACTIVITY';

let initialState = {
	allActivity: {
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
			},
			{
				title: 'Игра в баскетбол',
				id: 9,
				img: allActivity__img_9,
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
				id: 10,
				img: allActivity__img_10,
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
				id: 11,
				img: allActivity__img_11,
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
				id: 12,
				img: allActivity__img_12,
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
		],
		currentPage: 1,
		pageSize: 12,
		totalCount: 16,
	},
	recommendActivity: {
		items: [
			{
				title: 'Игра в баскетбол',
				id: 1,
				img: recommendActivity__img_1,
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
				img: recommendActivity__img_2,
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
				img: recommendActivity__img_3,
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
				img: recommendActivity__img_4,
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
		],
		currentPage: 1,
		pageSize: 4,
		totalCount: 8,
	}
};

const activityReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_ALL_ACTIVITY: {
			return {...state, allActivity: action.activity}
		}

		default:
			return state;
	}
};

export const changeFavorite = (id) => async (dispatch) => {
};

export const setAllActivity = (activity) => ({type: SET_ALL_ACTIVITY, activity});

export default activityReducer;