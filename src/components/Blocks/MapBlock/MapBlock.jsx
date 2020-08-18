import React from 'react';
import style from './MapBlock.module.scss';
import {YMaps, Map, Placemark} from "react-yandex-maps";

class MapBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			balloon: null,
			layout: null,
		};

		this.createTemplateLayoutFactory = ymaps => {
			if (ymaps && !this.state.balloon && !this.state.layout) {
				this.setState({
					balloon: ymaps.templateLayoutFactory.createClass(
						'<div class="balloon">' +
						'<svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="balloon__bg">' +
						'<path d="M5.06839 2.43313L0.992188 6H20.0232L15.3682 2.23407C12.3433 -0.213074 7.99645 -0.129064 5.06839 2.43313Z" fill="#9B63F8"/>' +
						'</svg>' +
						'<svg class="balloon__close" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<path d="M5.7972 1.18276L3.97923 3.00091L5.7972 4.81898C6.06761 5.08949 6.06761 5.52769 5.7972 5.79821C5.66209 5.93332 5.48495 6.00093 5.30789 6.00093C5.13054 6.00093 4.95338 5.93342 4.81838 5.79821L3.00001 3.97994L1.18179 5.79819C1.04669 5.9333 0.869534 6.00091 0.692325 6.00091C0.515167 6.00091 0.338129 5.93341 0.202914 5.79819C-0.0675001 5.5278 -0.0675001 5.08958 0.202914 4.81896L2.02083 3.00089L0.20281 1.18276C-0.0676034 0.912348 -0.0676034 0.474044 0.20281 0.203631C0.473172 -0.066575 0.911219 -0.066575 1.18168 0.203631L3 2.02178L4.81817 0.203631C5.08869 -0.066575 5.52678 -0.066575 5.79709 0.203631C6.06761 0.474044 6.06761 0.912348 5.7972 1.18276Z" fill="white"/>' +
						'</svg>' +
						'<p class="text-36 text_white">Казань, ул. Волкова, д. 7/29, третий подъезд</p>' +
						'</div>'
					),
					layout: ymaps.templateLayoutFactory.createClass(
						'<div class="layout">' +
						'<svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<path d="M23.2613 5.42616C20.8788 1.97801 17.103 0 12.9026 0C8.70219 0 4.92629 1.97801 2.5438 5.42616C0.173001 8.85688 -0.374424 13.2003 1.07652 17.0376C1.46461 18.0855 2.08152 19.1036 2.90574 20.0577L12.0718 30.8242C12.2791 31.0679 12.5829 31.2083 12.9026 31.2083C13.2223 31.2083 13.526 31.0679 13.7333 30.8242L22.8968 20.0606C23.7247 19.1011 24.3408 18.084 24.7257 17.0445C26.1796 13.2003 25.6321 8.85688 23.2613 5.42616ZM22.6823 16.2803C22.3855 17.0823 21.901 17.8753 21.243 18.638C21.2412 18.6398 21.2393 18.6416 21.2379 18.6438L12.9026 28.4341L4.56216 18.6377C3.90453 17.8756 3.42 17.0828 3.1203 16.2731C1.92036 13.0995 2.37575 9.50835 4.33882 6.66724C6.30805 3.81704 9.42961 2.18239 12.9026 2.18239C16.3755 2.18239 19.4967 3.81698 21.466 6.66724C23.4294 9.50835 23.8851 13.0995 22.6823 16.2803Z" fill="#9B63F8"/>' +
						'<path d="M12.9026 6.47437C9.53332 6.47437 6.79187 9.21545 6.79187 12.5851C6.79187 15.9547 9.53296 18.6958 12.9026 18.6958C16.2722 18.6958 19.0133 15.9547 19.0133 12.5851C19.0133 9.21582 16.2719 6.47437 12.9026 6.47437ZM12.9026 16.5134C10.7366 16.5134 8.97426 14.7511 8.97426 12.585C8.97426 10.419 10.7366 8.65669 12.9026 8.65669C15.0687 8.65669 16.8309 10.419 16.8309 12.585C16.8309 14.7511 15.0687 16.5134 12.9026 16.5134Z" fill="#9B63F8"/>' +
						'</svg>' +
						'</div>'
					)
				});
			}
		};
	};

	render() {

		let balloonOffset = [-150, 45];
		if (window.innerWidth < 566) balloonOffset = [-127, 25];

		return (
			<div className={style.block}>
				<YMaps query={{apikey: '27544797-3131-4759-9f4b-54f17c827eb2&lang=ru_RU'}} version={"2.1"}>
					<Map
						onLoad={this.createTemplateLayoutFactory}
						width={"100%"}
						height={"100%"}
						options={{
							suppressMapOpenBlock: true
						}}
						defaultState={{
							center: [55.7842132939628, 49.13208528034576],
							zoom: 15,
							controls: [],
						}}
						modules={["templateLayoutFactory", "layout.ImageWithContent"]}>
						<Placemark
							key='1'
							geometry={[55.7842132939628, 49.13208528034576]}
							options={{
								iconLayout: 'default#imageWithContent',
								iconImageSize: [60, 60],
								iconImageHref: '',
								iconContentLayout: this.state.layout,
								iconContentSize: [60, 60],
								iconContentOffset: [-30, -30],
								balloonLayout: this.state.balloon,
								balloonPanelMaxMapArea: 1,
								openEmptyBalloon: true,
								balloonOffset: balloonOffset,
								hideIconOnBalloonOpen: false,
							}}
							modules={["geoObject.addon.balloon"]}
							instanceRef={ref => {
								ref && ref.balloon.open()
							}}/>
					</Map>
				</YMaps>
			</div>
		)
	}
}

export default MapBlock;