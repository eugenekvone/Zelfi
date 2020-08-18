import React, {useState} from 'react';
import style from './Date.module.scss';
import cn from "classnames";


const Date = ({date, textClass, opacity, btnClass}) => {

	let [openMode, setOpenMode] = useState(true);

	let activateOpenMode = () => {
		setOpenMode(false)
	};
	let deactivateOpenMode = () => {
		setOpenMode(true)
	};

	const dateNew = [];
	const dateFirst = date[0];
	if (date.length > 1) {
		const text = <span className="text-10 click_reaction" onClick={deactivateOpenMode}>Скрыть</span>;


		date.forEach(function (item) {
			dateNew.push(item);
		});

		const dateFirst = dateNew[0];
		delete dateNew[0];
	}

	return (
		<p className={cn(style.text, textClass ? textClass : 'text-4', opacity)}>
			{dateFirst} {date.length > 1 ? (
			openMode ?
				<span className={cn("click_reaction", btnClass ? btnClass : 'text-10')}
				      onClick={activateOpenMode}>Показать все</span>
				: (dateNew.map(i => i + ', '))
		) : ''}
		</p>
	)
}

export default Date;