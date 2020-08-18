import React, {useState} from 'react';
import style from './RangeDatePicker.module.scss';
import ItemInput from "../ItemInput/ItemInput";


const RangeDatePicker = () => {

	let [date_1, setDate_1] = useState(new window.Date());
	let [date_2, setDate_2] = useState(new window.Date());

	return (
		<div className={style.range_date_picker}>
			<ItemInput name={'edit-admin-statistics-date_1'}
			           setDate={setDate_1}
			           input={'date-range'}/>
			<ItemInput name={'edit-admin-statistics-date_2'}
			           setDate={setDate_2}
			           input={'date-range'}/>
			<div className='input-item'>
				<p className="input-title text-7">Дата начала периода</p>
				<div className='input-wrap'>
					<input type="text"
					       name='edit-admin-statistics-date_3'
					       value={date_1 + '-' + date_2}
					       className='text-8 input'/>
				</div>
			</div>
		</div>
	)
};

export default RangeDatePicker;