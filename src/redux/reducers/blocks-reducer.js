import {Blocks} from "../../dal/constants/Blocks";
import {imgReader} from "../../utils/imgReader";

const SET_MAIN_IMG_BLOCK_14 = 'SET_MAIN_IMG_BLOCK_14';
const SET_OTHER_IMG_BLOCK_14 = 'SET_OTHER_IMG_BLOCK_14';
const SET_OTHER_IMG_FILE_BLOCK_14 = 'SET_OTHER_IMG_FILE_BLOCK_14';
const SET_MAIN_IMG_FILE_BLOCK_14 = 'SET_MAIN_IMG_FILE_BLOCK_14';
const SET_MAIN_IMG_ID_BLOCK_14 = 'SET_MAIN_IMG_ID_BLOCK_14';
const SET_OTHER_IMG_ID_BLOCK_14 = 'SET_OTHER_IMG_ID_BLOCK_14';


let initialState = {
	block_14: {
		main_img: {},
		other_img: [],
		main_img_file: false,
		other_img_file: [],
		main_img_id: {},
		other_img_id: []
	}
}

const blocksReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MAIN_IMG_BLOCK_14:
			return {...state, block_14: {...state.block_14, main_img: action.img}};
		case SET_OTHER_IMG_BLOCK_14:
			return {...state, block_14: {...state.block_14, other_img: [...state.block_14.other_img, action.img]}};
		case SET_MAIN_IMG_FILE_BLOCK_14:
			return {...state, block_14: {...state.block_14, main_img_file: action.file}};
		case SET_OTHER_IMG_FILE_BLOCK_14:
			return {
				...state,
				block_14: {...state.block_14, other_img_file: [...state.block_14.other_img_file, action.file]}
			};
		case SET_MAIN_IMG_ID_BLOCK_14:
			return {...state.block_14, main_img_id: action.id};
		case SET_OTHER_IMG_ID_BLOCK_14:
			return {...state, block_14: {...state.block_14, other_img_id: [...state.block_14.other_img_id, action.id]}};
		default:
			return state;
	}
};

export const sendPhoto = () => async (dispatch, getState) => {
	let main_img = getState().blocks.block_14.main_img_file;

	if (main_img) {
		let data = new FormData();
		data.append("data", main_img);
		let response = await Blocks.send_photo(data);

		if (response.status === 200) {
			dispatch(setMainImgId_Block_14(response.data.data.id));
		}
	}
};

export const sendMainImg = () => async (dispatch, getState) => {
	let main_img = getState().blocks.block_14.main_img_file;

	if (main_img) {
		let data = new FormData();
		data.append("data", main_img);
		let response = await Blocks.send_img(data);

		if (response.status === 200) {
			dispatch(setMainImgId_Block_14(response.data.data.id));
		}
	}
};

export const sendOtherImg = () => async (dispatch, getState) => {
	let other_img = getState().blocks.block_14.other_img_file;

	if (other_img) {

		let obj = [];

		for (let i = 0; i < other_img.length; i++) {
			obj.push(other_img[i]);
		}

		let data = new FormData();
		data.append("data", obj);
	}
};

export const saveOtherImg_Block_14 = (img) => async (dispatch) => {
	dispatch(setOtherImgFile_Block_14(img));
	imgReader(img, setOtherImg_Block_14, dispatch);
};

export const saveMainImg_Block_14 = (img) => async (dispatch) => {
	dispatch(setMainImgFile_Block_14(img));
	imgReader(img, setMainImg_Block_14, dispatch);
};

export const setOtherImg_Block_14 = (img) => ({type: SET_OTHER_IMG_BLOCK_14, img});
export const setMainImg_Block_14 = (img) => ({type: SET_MAIN_IMG_BLOCK_14, img});
export const setOtherImgFile_Block_14 = (file) => ({type: SET_OTHER_IMG_FILE_BLOCK_14, file});
export const setMainImgFile_Block_14 = (file) => ({type: SET_MAIN_IMG_FILE_BLOCK_14, file});
export const setMainImgId_Block_14 = (id) => ({type: SET_MAIN_IMG_ID_BLOCK_14, id});
export const setOtherImgId_Block_14 = (id) => ({type: SET_OTHER_IMG_ID_BLOCK_14, id});

export default blocksReducer;