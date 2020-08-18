import React from 'react';
import {
	GeolocationControl,
	Map,
	Placemark,
	SearchControl,
	YMaps,
	ZoomControl
} from "react-yandex-maps";


class Modal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		let coords = [55.7842132939628, 49.13208528034576];

		return (
			<YMaps query={{apikey: '27544797-3131-4759-9f4b-54f17c827eb2&lang=ru_RU'}} version={"2.1"}>
				<Map
					width={"100%"}
					height={"100%"}
					defaultState={{
						center: [55.7842132939628, 49.13208528034576],
						zoom: 13,
						controls: [],
					}}
					instanceRef={
						ref => {
							ref && this.props.isOpen && ref.container.enterFullscreen();
							ref && ref.events.add('click', function (e) {
									coords = e.get('coords');
								}
							)
						}
					}
					modules={["templateLayoutFactory", "layout.ImageWithContent"]}>
					<Placemark geometry={coords}/>
					<SearchControl options={{float: 'left'}}/>
					<ZoomControl options={{float: 'right'}}/>
					<GeolocationControl options={{float: 'left'}}/>
				</Map>
			</YMaps>
		)
	}
};

export default Modal;