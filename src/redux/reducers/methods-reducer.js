import {Methods} from "../../dal/constants/Methods";
import {phoneReader} from "../../utils/phoneReader";
import {stopSubmit} from "redux-form";

const SET_REQUISITE = 'SET_REQUISITE';

let initialState = {
	requisite: false,
};

const methodsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REQUISITE:
			return {...state, requisite: action.requisite};
		default:
			return state;
	}
};

export const addRequisite = (data) => async (dispatch) => {
	if (data.hasOwnProperty('phone')) {
		data.phone = phoneReader(data.phone);
	}
	let response = await Methods.add_requisite(data);

	if (response.status === 200) {
		dispatch(setRequisite(true));
	} else {
		dispatch(stopSubmit("requisites_legal", {_error: 'Ошибка'}));
		dispatch(stopSubmit("requisites_individ", {_error: 'Ошибка'}));
	}
};

export const setRequisite = (requisite) => ({type: SET_REQUISITE, requisite});

export default methodsReducer;