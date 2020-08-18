import {instance} from '../instance'


export const Organizations = {
	add_organization() {
		return instance.post(`methods/add_one_organizer`, {
			name: 'ffff',
			contact_phone: '89179303594',
			contact_email: 'frfrfrf@frfr.ru',
			address: 'ddddd',
			description: 'ddddd',
			created_at: 'ddddd',
			updated_at: 'ddddd',
			contract_concluded_at: 'ddddd',
			contract_conclude_status: 'ddddd',
			contact_city_id: 'ddddd',
			photo_id: 'ddddd',
			owner_id: 'ddddd',
			parent_id: 'ddddd',
		})
	},
	get_all_organizations() {
		return instance.get(`public/get_multiple_organizer_by_filter`)
	},
	create_organization(data) {
		return instance.post(`methods/add_one_organizer`, data)
	},
};