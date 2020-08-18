import {instance} from '../instance'


export const Activitys = {
	get_activity() {
		return instance.get(`public/get_one_activity_by_filter`)
	},
	get_categorys() {
		return instance.get(`public/get_all_category`)
	},
	get_age_ratings() {
		return instance.get(`public/get_all_age_rating`)
	},
	send_video(video) {
		return instance.post(`media/attach_gallery_youtube_video_link`, {
			youtube_video_link: video
		});
	},
	create_activity(data) {
		return instance.post(`methods/add_one_activity`, data)
	},
	get_one_activity() {
		return instance.get(`public/get_one_activity_by_filter`, {
			key: 1,
			value: '1'
		})
	},
};