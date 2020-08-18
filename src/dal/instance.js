import * as axios from "axios";


export const instance = axios.create({
	baseURL: 'https://zelfi-dev.rdbx24.ru/api/',
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
	},
	data: {},
});

if (localStorage.getItem('access_token')) {
	instance.defaults.headers.common = {'Authorization': 'Bearer ' + localStorage.getItem('access_token')};
}
