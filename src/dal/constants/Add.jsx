import {instance} from '../instance'


export const Add = {
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
	add_category() {
		return instance.post(`methods/add_multiple_category`, {
				data: [
					{title: 'Категория 1'},
					{title: 'Категория 2'},
					{title: 'Категория 3'},
				]
			}
		)
	},
	add_city() {
		return instance.post(`methods/add_multiple_city`, {
				data: [
					{title: 'Город 1'},
					{title: 'Город 2'},
					{title: 'Город 3'},
				]
			}
		)
	},
};