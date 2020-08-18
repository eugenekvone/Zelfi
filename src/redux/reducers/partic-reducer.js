import topPartic__avatar_1 from "../../assets/img/initialState/topPartic/topPartic__avatar_1.jpg";
import topPartic__avatar_2 from "../../assets/img/initialState/topPartic/topPartic__avatar_2.jpg";
import topPartic__avatar_3 from "../../assets/img/initialState/topPartic/topPartic__avatar_3.jpg";
import topPartic__avatar_4 from "../../assets/img/initialState/topPartic/topPartic__avatar_4.jpg";
import topPartic__avatar_5 from "../../assets/img/initialState/topPartic/topPartic__avatar_5.jpg";

const SET_TOP_PARTIC = 'SET_TOP_PARTIC';

let initialState = {
	topPartic: {
		items: [
			{
				name: 'Антон Камолов',
				avatar: topPartic__avatar_1,
				points: 2657,
				plice: 1
			},
			{
				name: 'Михаил Константинопольский',
				avatar: topPartic__avatar_2,
				points: 2657,
				plice: 2
			},
			{
				name: 'Екатерина Игорева',
				avatar: topPartic__avatar_3,
				points: 2657,
				plice: 3
			},
			{
				name: 'Иван Иванов',
				avatar: topPartic__avatar_4,
				points: 2657,
				plice: 4
			},
			{
				name: 'Сергей Пантелеев',
				avatar: topPartic__avatar_5,
				points: 2657,
				plice: 5
			},
			{
				name: 'Антон Камолов',
				avatar: topPartic__avatar_1,
				points: 2657,
				plice: 6
			},
			{
				name: 'Михаил Константинопольский',
				avatar: topPartic__avatar_2,
				points: 2657,
				plice: 7
			},
			{
				name: 'Екатерина Игорева',
				avatar: topPartic__avatar_3,
				points: 2657,
				plice: 8
			},
			{
				name: 'Иван Иванов',
				avatar: topPartic__avatar_4,
				points: 2657,
				plice: 9
			},
			{
				name: 'Сергей Пантелеев',
				avatar: topPartic__avatar_5,
				points: 2657,
				plice: 10
			},
		],
		currentPage: 1,
		pageSize: 10,
	},
};

const particReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_TOP_PARTIC: {
			return {...state, topPartic: action.partic}
		}

		default:
			return state;
	}
};

export const setTopPartic = (partic) => ({type: SET_TOP_PARTIC, partic});

export default particReducer;