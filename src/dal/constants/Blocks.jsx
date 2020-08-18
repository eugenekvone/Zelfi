import {instance} from '../instance'


export const Blocks = {
	send_img(img) {
		return instance.post(`media/upload_gallery_image`, img);
	},
	send_photo(img) {
		return instance.post(`media/upload_photo`, img);
	},
};