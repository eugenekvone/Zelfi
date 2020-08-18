import React from 'react';
import style from './Rating.module.scss';
import cn from "classnames";
import Title from "../Commons/Title/Title";
import RatingReduxForm from "./RatingForm/DonationsForm";
import BtnBack from "../Commons/Btns/BtnBack/BtnBack";
import Paginator from "../Commons/Paginator/Paginator";
import Item from "./Item/Item";
import img from "../../assets/img/initialState/Rating/img.jpg";


const Rating = () => {

	let initialState = {
		items: [
			{place: 1, img: img},
			{place: 2, img: img},
			{place: 3, img: img},
			{place: 4, img: img},
			{place: 5, img: img},
			{place: 6, img: img},
			{place: 7, img: img},
			{place: 8, img: img},
			{place: 9, img: img},
			{place: 10, img: img},
			{place: 11, img: img},
			{place: 12, img: img},
			{place: 13, img: img},
			{place: 14, img: img},
			{place: 15, img: img},
			{place: 16, img: img},
			{place: 17, img: img},
			{place: 18, img: img},
			{place: 19, img: img},
			{place: 20, img: img},
			{place: 21, img: img},
		],
	};

	return (
		<div className={style.rating}>
			<div className={'content container'}>
				<Title title={'Рейтинг'} marginNone/>
				<div className={style.block_1}>
					<div className="flex-bottom">
						<BtnBack title={'На главную'} link={'/'}/>
					</div>
					<div className={cn(style.btn, "btn btn-2 btn_height-1")}>
						<p className="text-7">О программе лояльности</p>
					</div>
				</div>
				<div className={cn(style.block_2, "case")}>
					<RatingReduxForm/>
				</div>
				<div className={style.block_3}>
					<Item img={img} place={27} winner/>
				</div>
				<div className="inner_2">
					{initialState.items.map(i =>
						<Item img={i.img} place={i.place}/>
					)}
				</div>
				<Paginator/>
			</div>
			<div className='block_back block_back_full block_back_transfusion none_adaptive'></div>
		</div>
	)
};

export default Rating;