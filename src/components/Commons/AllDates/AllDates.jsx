import React, {useState} from 'react';
import style from './AllDates.module.scss';
import Info from "../Info/Info";


const AllDates = () => {

	let initialState = {
		items: [
			{
				date: '21 окт. 2019 (пт)',
				time: '17:30'
			},
			{
				date: '21 окт. 2019 (пт)',
				time: '17:30'
			},
			{
				date: '21 окт. 2019 (пт)',
				time: '17:30'
			},
			{
				date: '21 окт. 2019 (пт)',
				time: '17:30'
			},
			{
				date: '21 окт. 2019 (пт)',
				time: '17:30'
			},
			{
				date: '21 окт. 2019 (пт)',
				time: '17:30'
			},
			{
				date: '21 окт. 2019 (пт)',
				time: '17:30'
			},
		]
	}

	let items = initialState.items;

	let [openMode, setOpenMode] = useState(false);

	let activateOpenMode = () => {
		setOpenMode(false)
	};
	let deactivateOpenMode = () => {
		setOpenMode(true)
	};

	return (
		<div className={style.show_all}>
			<div className={style.block_1}>
				<Info item='date_text' text={items[0].date} margin_right={'true'} opacity={'true'}
				      textClass={'text-8'}/>
				<Info item='time' text={items[0].time} opacity={'true'} textClass={'text-8'}/>
			</div>
			{openMode ?
				<p className='click_reaction text-10 flex_left' onClick={activateOpenMode}>Скрыть</p>
				:
				<p className='click_reaction text-10 flex_left' onClick={deactivateOpenMode}>Показать все</p>
			}
			{openMode && (items.length > 1) &&
			<div className={style.block_2}>
				{initialState.items.map(i =>
					<div className='flex-ver-center'>
						<Info item='date_text' text={i.date} margin_right={'true'} opacity={'true'}
						      textClass={'text-8'}/>
						<Info item='time' text={i.time} opacity={'true'} textClass={'text-8'}/>
					</div>
				)}
			</div>
			}
		</div>
	)
};

export default AllDates;