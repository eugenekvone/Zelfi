import {instance} from '../instance'


export const Public = {
	get_categorys() {
		return instance.get(`public/get_all_category`)
	},
	get_age_ratings() {
		return instance.get(`public/get_all_age_rating`)
	},
	get_citys() {
		return instance.get(`public/get_all_city`)
	},
	send_callback(data) {
		return instance.post(`public/send_callback`, data)
	},
};