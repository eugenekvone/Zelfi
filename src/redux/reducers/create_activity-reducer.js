import dateFormat from 'dateformat';
import {sendMainImg, sendOtherImg} from "./blocks-reducer";
import {Activitys} from "../../dal/constants/Activitys";
import {addRequisite} from "./methods-reducer";
import {phoneReader} from "../../utils/phoneReader";

const SET_DATA = 'SET_DATA';
const SET_DATA_DATE = 'SET_DATA_DATE';
const SET_DATE = 'SET_DATE';
const SET_DATE_INDEX = 'SET_DATE_INDEX';
const SET_TICKET_INDEX = 'SET_TICKET_INDEX';
const SET_RESET_DATA_DATE = 'SET_RESET_DATA_DATE';
const SET_QUESTION = 'SET_QUESTION';
const SET_GALLERY = 'SET_GALLERY';


let initialState = {
	data: {},
	data_dates: [],
	dates: {},
	date_index: 0,
	ticket_index: 0,
	questions: [],
	gallery: [],
};

const create_activityReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA:
			return {...state, data: action.data};
		case SET_DATA_DATE:
			return {...state, data_dates: [...state.data_dates, action.date]};
		case SET_RESET_DATA_DATE:
			return {...state, data_dates: action.date};
		case SET_DATE:
			return {...state, dates: action.date};
		case SET_DATE_INDEX:
			return {...state, date_index: action.index};
		case SET_TICKET_INDEX:
			return {...state, ticket_index: action.index};
		case SET_QUESTION:
			return {...state, questions: [...state.questions, action.question]};
		case SET_GALLERY:
			return {...state, gallery: [...state.gallery, action.id]};
		default:
			return state;
	}
};

export const addCreateActivityDate = () => async (dispatch, getState) => {

	dispatch(setCreateActivityDatesIndex(getState().create_activity.date_index + 1));

	let index = getState().create_activity.date_index;

	let data = getState().form.create_activity_step_1.values;

	if (data &&
		data.create_activity_date_start &&
		data.create_activity_time_start &&
		data.create_activity_date_end &&
		data.create_activity_time_end
	) {

		const date = {
			0: data.create_activity_date_start,
			1: data.create_activity_time_start,
			2: data.create_activity_date_end,
			3: data.create_activity_time_end
		};

		let dateStart, dateEnd, timeStart, timeEnd = '';

		dateStart = dateFormat(new Date(data.create_activity_date_start), 'dd.mm.yyyy');
		dateEnd = dateFormat(new Date(data.create_activity_date_end), 'dd.mm.yyyy');

		timeStart = data.create_activity_time_start.substr(0, 2) + ':' +
			data.create_activity_time_start.substr(2, 2)
		timeEnd = data.create_activity_time_end.substr(0, 2) + ':' +
			data.create_activity_time_end.substr(2, 2)

		const dataDate = {
			start: dateStart + ' ' + timeStart,
			end: dateEnd + ' ' + timeEnd,
			other: {
				start: {date: dateStart, time: timeStart},
				end: {date: dateEnd, time: timeEnd},
				index: index
			},
			tickets: []
		}

		let keys = [
			('create_activity_date_start_' + index),
			('create_activity_time_start_' + index),
			('create_activity_date_end_' + index),
			('create_activity_time_end_' + index)
		];

		for (var i = 0; i < 4; i++) {
			if (i !== keys[i]) {
				Object.defineProperty(date, keys[i],
					Object.getOwnPropertyDescriptor(date, i));
				delete date[i];
			}
		}

		let obj = {}
		obj = Object.assign(getState().create_activity.dates, date);

		dispatch(setCreateActivityDataDate(dataDate));
		dispatch(setCreateActivityDate(obj));
	}
};

export const addCreateActivityTicket = (data) => async (dispatch, getState) => {

	dispatch(setCreateActivityTicketIndex(getState().create_activity.ticket_index + 1));

	let index = getState().create_activity.ticket_index;

	const ticket = {
		name: data.create_activity_ticket_name,
		number: data.create_activity_ticket_number,
		unlimited: data.create_activity_ticket_unlimited,
		price: data.create_activity_ticket_price,
		free: data.create_activity_ticket_free,
		id: 'ticket_' + index,
	};

	let date = getState().form.create_activity_step_2_radio.values.create_activity_radio;

	if (parseInt(date) !== 0) date--

	let data_dates = getState().create_activity.data_dates;

	data_dates[date].tickets.push({
		title: data.create_activity_ticket_name,
		price: data.create_activity_ticket_price,
		other: ticket
	});
	dispatch(setResetCreateActivityDataDate(data_dates));
};

export const CreateActivityDateDelete = (index) => async (dispatch, getState) => {
	let data_dates = getState().create_activity.data_dates;
	dispatch(setResetCreateActivityDataDate(data_dates.filter(data_dates => data_dates.other.index !== index)));
};

export const CreateActivityTicketDelete = (id, index) => async (dispatch, getState) => {
	let tickets = getState().create_activity.data_dates[index - 1].tickets;
	let data_dates = getState().create_activity.data_dates;
	data_dates[index - 1].tickets = tickets.filter(tickets => tickets.other.id !== id);
	dispatch(setResetCreateActivityDataDate(data_dates));
};

export const sendCreateActivityVideo = (video) => async (dispatch) => {
	let response = await Activitys.send_video(video);

	if (response.status === 200) {
		dispatch(setCreateActivityGallery(response.data.data[0].id));
	}
};

export const addCreateActivityData = (data) => async (dispatch) => {
	dispatch(sendMainImg());
	dispatch(sendOtherImg());
	if (data.video) dispatch(sendCreateActivityVideo(data.video))
	dispatch(setCreateActivityData(data));
}

export const CreateActivitySubmit = () => async (dispatch, getState) => {

	let data = getState().create_activity.data;

	let dataSubmit = [];

	let data_dates = getState().create_activity.data_dates;

	for (let i = 0; i < data_dates.length; i++) {
		delete data_dates[i].other;
		for (let k = 0; k < data_dates[i].tickets.length; k++) {
			delete data_dates[i].tickets[k].other
		}
	}

	dataSubmit = {
		type: 'free',
		address_description: data.address_description,
		address: data.address,
		contact_phone: data.contact_phone,
		contact_email: data.contact_email,
		description: data.description,
		title: data.title,
		dates: data_dates,
		questions: getState().create_activity.questions,
		gallery_array: getState().create_activity.gallery.concat(getState().blocks.block_14.other_img_id),
		contact_city: data.contact_city.value,
		category: data.category.value,
		ageRating: data.ageRating.value,
		organizer: data.organizer.value,
		general_image: getState().blocks.block_14.main_img_id,
	}

	if (dataSubmit.hasOwnProperty('contact_phone')) {
		dataSubmit.contact_phone = phoneReader(dataSubmit.contact_phone)
	}

	await Activitys.create_activity(dataSubmit);
};

export const addCreateActivityRequisite = (data) => async (dispatch, getState) => {
	data.organizer_id = getState().create_activity.data.organizer.value;
	dispatch(addRequisite(data));
}

export const setCreateActivityData = (data) => ({type: SET_DATA, data});
export const setCreateActivityDataDate = (date) => ({type: SET_DATA_DATE, date});
export const setResetCreateActivityDataDate = (date) => ({type: SET_RESET_DATA_DATE, date});
export const setCreateActivityDate = (date) => ({type: SET_DATE, date});
export const setCreateActivityDatesIndex = (index) => ({type: SET_DATE_INDEX, index});
export const setCreateActivityTicketIndex = (index) => ({type: SET_TICKET_INDEX, index});
export const setCreateActivityQuestion = (question) => ({type: SET_QUESTION, question});
export const setCreateActivityGallery = (id) => ({type: SET_GALLERY, id});

export default create_activityReducer;