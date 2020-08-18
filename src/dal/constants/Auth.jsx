import {instance} from '../instance'


export const Auth = {
	registration_main(name, last_name, email, accept_confidence_license, accept_personal_license) {
		return instance.post(`auth/register_one_user`, {
			name,
			last_name,
			email,
			accept_confidence_license,
			accept_personal_license
		});
	},
	registration_password(token, password, password_confirmation) {
		return instance.post(`auth/activate_one_user_by_token`, {token, password, password_confirmation});
	},
	login(email, password) {
		return instance.post(`auth/login_one_user`, {email, password});
	},
	recovery_main(email) {
		return instance.post(`auth/send_remember_password_link`, {email});
	},
	recovery_password(token, password, password_confirmation) {
		return instance.post(`auth/set_new_password_by_token`, {token, password, password_confirmation});
	},
};