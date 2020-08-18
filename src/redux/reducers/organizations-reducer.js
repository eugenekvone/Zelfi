import {Organizations} from "../../dal/constants/Organizations";

const SET_ALL_ORGANIZATIONS = 'SET_ALL_ORGANIZATIONS';

let initialState = {
	all_organizations: {},
};

const organizationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ALL_ORGANIZATIONS:
			return {...state, all_organizations: action.organizations};
		default:
			return state;
	}
};

export const addOrganization = () => async () => {
	let response = await Organizations.add_organization();
};

export const getAllOrganizations = () => async (dispatch) => {
	let response = await Organizations.get_all_organizations();
	dispatch(setAllOrganizations(response.data.data));
};

export const setAllOrganizations = (organizations) => ({type: SET_ALL_ORGANIZATIONS, organizations});

export default organizationsReducer;