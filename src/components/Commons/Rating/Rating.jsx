import React, {useState} from 'react';
import style from './Rating.module.scss';
import cn from "classnames";
import item_active_big from "../../../assets/img/Commons/Rating/item_active_big.svg";
import item_disabled_big from "../../../assets/img/Commons/Rating/item_disabled_big.svg";
import item_active from "../../../assets/img/Commons/Rating/item_active.svg";
import item_disabled from "../../../assets/img/Commons/Rating/item_disabled.svg";
import item_active_purple from "../../../assets/img/Commons/Rating/item_active_purple.svg";
import item_disabled_purple from "../../../assets/img/Commons/Rating/item_disabled_purple.svg";


const Rating = ({rating, size, purple, change}) => {

	let img_active = item_active;
	let img_disabled = item_disabled;
	let block_class = null;

	let item_change = null;

	let item_class = style.item_small;

	switch (size) {
		case 'small':
			item_class = style.item_small;
			break;
		case 'middle':
			item_class = style.item_middle;
			break;
		case 'large':
			item_class = style.item_large;
			break;
		case 'big':
			item_class = style.item_big;
			img_active = item_active_big;
			img_disabled = item_disabled_big;
			block_class = style.block_big;
			break;
		default:
			break;
	}

	if (purple) {
		img_active = item_active_purple;
		img_disabled = item_disabled_purple;
	}

	let [star_1, setStar_1] = useState(false);
	let [star_2, setStar_2] = useState(false);
	let [star_3, setStar_3] = useState(false);
	let [star_4, setStar_4] = useState(false);
	let [star_5, setStar_5] = useState(false);

	let addStar_1 = () => {
		setStar_1(true);
		setStar_2(false);
		setStar_3(false);
		setStar_4(false);
		setStar_5(false);
	};
	let addStar_2 = () => {
		setStar_1(true);
		setStar_2(true);
		setStar_3(false);
		setStar_4(false);
		setStar_5(false);
	};
	let addStar_3 = () => {
		setStar_1(true);
		setStar_2(true);
		setStar_3(true);
		setStar_4(false);
		setStar_5(false);
	};
	let addStar_4 = () => {
		setStar_1(true);
		setStar_2(true);
		setStar_3(true);
		setStar_4(true);
		setStar_5(false);
	};
	let addStar_5 = () => {
		setStar_1(true);
		setStar_2(true);
		setStar_3(true);
		setStar_4(true);
		setStar_5(true);
	};

	switch (rating) {
		case '1':
			addStar_1();
			break;
		case '2':
			addStar_2();
			break;
		case '3':
			addStar_3();
			break;
		case '4':
			addStar_4();
			break;
		case '5':
			addStar_5();
			break;
		default:
			break;
	}

	if (change) {
		item_change = style.item_change
	}

	return (
		<div className={cn(style.block, block_class)}>
			{star_1 ?
				<img className={cn(item_class, item_change)} onClick={change && addStar_1} src={img_active}
				     alt="item_active"/>
				:
				<img className={cn(item_class, item_change)} onClick={change && addStar_1} src={img_disabled}
				     alt="item_disabled"/>
			}
			{star_2 ?
				<img className={cn(item_class, item_change)} onClick={change && addStar_2} src={img_active}
				     alt="item_active"/>
				:
				<img className={cn(item_class, item_change)} onClick={change && addStar_2} src={img_disabled}
				     alt="item_disabled"/>
			}
			{star_3 ?
				<img className={cn(item_class, item_change)} onClick={change && addStar_3} src={img_active}
				     alt="item_active"/>
				:
				<img className={cn(item_class, item_change)} onClick={change && addStar_3} src={img_disabled}
				     alt="item_disabled"/>
			}
			{star_4 ?
				<img className={cn(item_class, item_change)} onClick={change && addStar_4} src={img_active}
				     alt="item_active"/>
				:
				<img className={cn(item_class, item_change)} onClick={change && addStar_4} src={img_disabled}
				     alt="item_disabled"/>
			}
			{star_5 ?
				<img className={cn(item_class, item_change)} onClick={change && addStar_5} src={img_active}
				     alt="item_active"/>
				:
				<img className={cn(item_class, item_change)} onClick={change && addStar_5} src={img_disabled}
				     alt="item_disabled"/>
			}
		</div>
	)
};

export default Rating;