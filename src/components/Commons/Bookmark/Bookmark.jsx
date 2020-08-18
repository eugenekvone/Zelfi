import React, {useState} from 'react';
import style from './Bookmark.module.scss';
import icon_5 from "../../../assets/img/Profile/icon_5.svg";
import icon_6 from "../../../assets/img/Profile/icon_6.svg";


const Bookmark = () => {

	let [bookmark, setBookmark] = useState(false);

	const editBookmark = () => {
		bookmark ? setBookmark(false) : setBookmark(true)
	}

	return (
		<div onClick={editBookmark} className={style.bookmark}>
			{bookmark ?
				<img src={icon_5} alt="icon_5"/>
				:
				<img src={icon_6} alt="icon_6"/>
			}
		</div>
	)
};

export default Bookmark;