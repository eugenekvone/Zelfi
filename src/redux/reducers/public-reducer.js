import {Public} from "../../dal/constants/Public";
import {stopSubmit} from "redux-form";

const SET_CITYS = 'SET_CITYS';
const SET_CATEGORYS = 'SET_CATEGORYS';
const SET_AGE_RATINGS = 'SET_AGE_RATINGS';
const SET_CALLBACK = 'SET_CALLBACK';

let initialState = {
	citys: [],
	categorys: [],
	age_ratings: [],
	callback_success: false,
};

const publicReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORYS:
			return {...state, categorys: action.categorys};
		case SET_AGE_RATINGS:
			return {...state, age_ratings: action.age_ratings};
		case SET_CITYS:
			return {...state, citys: action.citys};
		case SET_CALLBACK:
			return {...state, callback_success: action.callback};
		default:
			return state;
	}
};

export const getCitys = () => async (dispatch) => {
	let response = await Public.get_citys();
	dispatch(setCitys(response.data.data));
};

export const getCategorys = () => async (dispatch) => {
	let response = await Public.get_categorys();
	dispatch(setCategorys(response.data.data));
};

export const getAgeRatings = () => async (dispatch) => {
	let response = await Public.get_age_ratings();
	dispatch(setAgeRatings(response.data.data));
};

export const sendCallback = (data) => async (dispatch) => {
	let response = await Public.send_callback(data);
	if (response.status === 200) {
		dispatch(setCallback(true));
	} else {
		dispatch(stopSubmit("contacts", {_error: 'Ошибка'}));
		dispatch(setCallback(false));
	}
};

export const setCitys = (citys) => ({type: SET_CITYS, citys});
export const setCategorys = (categorys) => ({type: SET_CATEGORYS, categorys});
export const setAgeRatings = (age_ratings) => ({type: SET_AGE_RATINGS, age_ratings});
export const setCallback = (callback) => ({type: SET_CALLBACK, callback});

export default publicReducer;