import {stopSubmit} from "redux-form";
import {Auth} from "../../dal/constants/Auth";
import {instance} from '../../dal/instance'

const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const SET_REGISTRATION_ACCESS_TOKEN = 'SET_REGISTRATION_ACCESS_TOKEN';
const SET_REGISTRATION_MAIN_SUCCESS = 'SET_REGISTRATION_MAIN_SUCCESS';
const SET_REGISTRATION_MAIN_ERROR = 'SET_REGISTRATION_MAIN_ERROR';
const SET_REGISTRATION_PASSWORD_SUCCESS = 'SET_REGISTRATION_PASSWORD_SUCCESS';

const SET_RECOVERY_ACCESS_TOKEN = 'SET_RECOVERY_ACCESS_TOKEN';
const SET_RECOVERY_MAIN_SUCCESS = 'SET_RECOVERY_MAIN_SUCCESS';
const SET_RECOVERY_MAIN_ERROR = 'SET_RECOVERY_MAIN_ERROR';
const SET_RECOVERY_PASSWORD_SUCCESS = 'SET_RECOVERY_PASSWORD_SUCCESS';

let initialState = {
	access_token: '',

	isAuth: false,
	login_error: false,

	registration_access_token: '',
	registration_main_success: false,
	registration_main_error: false,

	recovery_access_token: '',
	recovery_main_success: false,
	recovery_main_error: false,
	recovery_password_success: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACCESS_TOKEN:
			return {...state, access_token: action.token};
		case SET_IS_AUTH:
			return {...state, isAuth: action.auth};
		case SET_LOGIN_ERROR:
			return {...state, login_error: action.error};

		case SET_REGISTRATION_ACCESS_TOKEN:
			return {...state, registration_access_token: action.token};
		case SET_REGISTRATION_MAIN_SUCCESS:
			return {...state, registration_main_success: action.success};
		case SET_REGISTRATION_MAIN_ERROR:
			return {...state, registration_main_error: action.error};

		case SET_REGISTRATION_PASSWORD_SUCCESS:
			return {...state, registration_password_success: action.success};

		case SET_RECOVERY_ACCESS_TOKEN:
			return {...state, recovery_access_token: action.token};
		case SET_RECOVERY_MAIN_SUCCESS:
			return {...state, recovery_main_success: action.success};
		case SET_RECOVERY_MAIN_ERROR:
			return {...state, recovery_main_error: action.error};
		case SET_RECOVERY_PASSWORD_SUCCESS:
			return {...state, recovery_password_success: action.success};
		default:
			return state;
	}
};

export const setAccessToken = (token) => ({type: SET_ACCESS_TOKEN, token});
export const setRegistrationAccessToken = (token) => ({type: SET_REGISTRATION_ACCESS_TOKEN, token});
export const setIsAuth = (auth) => ({type: SET_IS_AUTH, auth});
export const setLoginError = (error) => ({type: SET_LOGIN_ERROR, error});

export const setRegistrationMainSuccess = (success) => ({type: SET_REGISTRATION_MAIN_SUCCESS, success});
export const setRegistrationMainError = (error) => ({type: SET_REGISTRATION_MAIN_ERROR, error});

export const setRegistrationPasswordSuccess = (success) => ({type: SET_REGISTRATION_PASSWORD_SUCCESS, success});

export const setRecoveryAccessToken = (token) => ({type: SET_RECOVERY_ACCESS_TOKEN, token});
export const setRecoveryMainSuccess = (success) => ({type: SET_RECOVERY_MAIN_SUCCESS, success});
export const setRecoveryMainError = (error) => ({type: SET_RECOVERY_MAIN_ERROR, error});
export const setRecoveryPasswordSuccess = (success) => ({type: SET_RECOVERY_PASSWORD_SUCCESS, success});

export const registrationMain = (data) => async (dispatch) => {
	try {
		let response = await Auth.registration_main(
			data.registration_main_input_1,
			data.registration_main_input_2,
			data.registration_main_input_3,
			data.registration_main_checkbox_1,
			data.registration_main_checkbox_2,
		);

		if (response.status === 200) {
			dispatch(setRegistrationMainSuccess(true));
		} else {
			dispatch(stopSubmit("registration_main", {_error: 'Ошибка'}));
		}
	} catch (error) {
		dispatch(setRegistrationMainError(true));
	}
};

export const registrationPassword = (data) => async (dispatch, getState) => {

	const token = getState().auth.registration_access_token;

	let response = await Auth.registration_password(
		token,
		data.password_confirmed_input_1,
		data.password_confirmed_input_2
	);

	if (response.status === 200) {
		dispatch(setRegistrationPasswordSuccess(true));
	} else {
		dispatch(stopSubmit("registration_main", {_error: 'Ошибка'}));
	}
};

export const login = (data) => async (dispatch) => {
	try {
		let response = await Auth.login(
			data.login_input_1,
			data.login_input_2
		);

		if (response.status === 200) {
			dispatch(setAccessToken(response.data.data.attributes.access_token));
			dispatch(setIsAuth(true));

			localStorage.setItem('access_token', response.data.data.attributes.access_token)
			instance.defaults.headers.common = {'Authorization': 'Bearer ' + response.data.data.attributes.access_token};
		} else {
			dispatch(stopSubmit("registration-confirmed", {_error: "Ошибка"}));
		}
	} catch (error) {
		dispatch(setLoginError(true));
	}
}

export const recoveryMain = (data) => async (dispatch) => {
	try {
		let response = await Auth.recovery_main(data.recovery_main_input);

		if (response.status === 200) {
			dispatch(setRecoveryMainSuccess(true));
		} else {
			dispatch(stopSubmit("recovery-main", {_error: 'Ошибка'}));
		}
	} catch (error) {
		dispatch(setRecoveryMainError(true));
	}
};

export const recoveryPassword = (data) => async (dispatch, getState) => {

	const token = getState().auth.recovery_access_token;

	let response = await Auth.recovery_password(
		token,
		data.password_confirmed_input_1,
		data.password_confirmed_input_2
	);

	if (response.status === 200) {
		dispatch(setRecoveryPasswordSuccess(true));
	} else {
		dispatch(stopSubmit("recovery-password", {_error: 'Ошибка'}));
	}
};

export default authReducer;