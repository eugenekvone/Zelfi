import {instance} from '../instance'


export const Methods = {
	add_requisite(data) {
		return instance.post(`methods/fill_one_organizer_requisite`, data)
	},
};