import {Activitys} from "../../dal/constants/Activitys";

let initialState = {};

const activitysReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const getOneActivity = () => async () => {
	await Activitys.get_one_activity();
};

export default activitysReducer;