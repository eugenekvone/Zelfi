import {sendPhoto} from "./blocks-reducer";
import {Organizations} from "../../dal/constants/Organizations";
import {phoneReader} from "../../utils/phoneReader";
import {stopSubmit} from "redux-form";
import {addRequisite} from "./methods-reducer";

const SET_ID = 'SET_ID';


let initialState = {
	id: 11,
};

const create_organizationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ID:
			return {...state, id: action.id};
		default:
			return state;
	}
};

export const CreateOrganizationSubmit = (data) => async (dispatch) => {
	dispatch(sendPhoto());
	data.contact_phone = phoneReader(data.contact_phone);
	data.contact_city_id = data.contact_city_id.value
	let response = await Organizations.create_organization(data);

	if (response.status === 200) {
		dispatch(setCreateOrganizationId(response.data.data.id));
	} else {
		dispatch(stopSubmit("create_organization", {_error: 'Ошибка'}));
	}
};

export const addCreateOrganizationRequisite = (data) => async (dispatch, getState) => {
	data.organizer_id = getState().create_organization.id;
	dispatch(addRequisite(data))
}


export const setCreateOrganizationId = (id) => ({type: SET_ID, id});
export default create_organizationReducer;