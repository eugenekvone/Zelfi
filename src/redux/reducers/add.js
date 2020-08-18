import {Add} from "../../dal/constants/Add";


export const addOrganization = () => async () => {
	await Add.add_organization();
};

export const addCategory = () => async () => {
	await Add.add_category();
};

export const addCity = () => async () => {
	await Add.add_city();
};