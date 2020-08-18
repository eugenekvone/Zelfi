import React, {useEffect, useRef, useState} from 'react';
import style from './Activity.module.scss';
import cn from "classnames";
import reviews__avatar from "../../assets/img/initialState/Event/reviews__avatar.jpg";
import Rating from "../Commons/Rating/Rating";
import Points from "../Commons/Points/Points";
import IframeBlock from "../Blocks/IframeBlock/IframeBlock";
import CarouselIframeBlock from "../Blocks/CarouselIframeBlock/CarouselIframeBlock";
import MapBlock from "../Blocks/MapBlock/MapBlock";
import AllActivity__Block_1_carousel from "../Blocks/GridBlock/Containers/AllActivity__GridBlock_carousel";
import Btn_openAll from "../Commons/Btns/BtnOpenAll/BtnOpenAll";
import Btn_sorting from "../Commons/Btns/BtnSorting/BtnSorting";
import AppraisalBlock from "../Blocks/AppraisalBlock/AppraisalBlock";
import AvatarBlock from "../Blocks/AvatarBlock/AvatarBlock";
import FixBlock from "../Blocks/FixBlock/FixBlock";


window.current = 10000;
window.fixBlockValue = 1;

const Activity = ({completed, organizer}) => {

	const refBlock = useRef(null);

	let [blockStop, setBlockStop] = useState([]);

	useEffect(() => {
		if (window.innerWidth > 1058) {
			window.addEventListener('scroll', function () {
				if (refBlock.current !== null) {
					setBlockStop(refBlock.current.getBoundingClientRect().top);
				}
			})
		}
		;
	});

	let initialState = {
		points: [
			'За два часа ваш ребенок:',
			'Превратит продукты питания в пищу для ума',
			'Узнает о составе еды, её физических и химических свойствах',
			'Освоит технологии производства мороженого и научной варки яиц',
			'Синтезирует парочку “Е” и узнает, вредно ли это для здоровья'
		],
		reviews: [
			{avatar: reviews__avatar},
			{avatar: reviews__avatar},
			{avatar: reviews__avatar},
			{avatar: reviews__avatar},
			{avatar: reviews__avatar},
			{avatar: reviews__avatar},
		]
	};

	return (
		<div>
			<div className="relative">
				<div className={style.block}>
					<FixBlock completed={completed} organizer={organizer}/>
				</div>
				<div className={style.inner_1}>
					<div className="container">
						<div className='block_3'>
							<p className={cn(style.text_1, "text-3 text-1_adaptive")}>Еда и здоровье</p>
							<h2 className={cn(style.text_2, "h2-1 text-9_adaptive")}>Чайная церемония</h2>
							<p className={cn(style.text_2, "text-14 text-3_adaptive")}>В компании физиков, химиков и
								биологов, ребята проведут серию экспериментов над привычными продуктами питания. Чуть
								больше чем за два часа узнаем из чего состоит еда, разберем ее на компоненты и соберем
								обратно в изысканное блюдо для наших ведущих.</p>
							<div className={style.block_1}>
								<Points items={initialState.points}/>
							</div>
							<div className={style.block_2}>
								<IframeBlock/>
							</div>
							<p className={cn(style.text_3, "text-14 text-3_adaptive")}>В лаборатории жгучих перцев
								соберём собственные аппараты для экстракции. Узнаем, чем на самом деле пахнет мята,
								почему красный перец такой жгучий и получим привычные для кухни запахи лабораторным
								способом.
								<br></br><br></br>
								В лаборатории вареных яиц c помощью физико-химических методов вычислим идеальное время
								для варки куриного яйца. Отделим желток от белка, проведем качественное сравнение
								составов и узнаем все о стоимости выеденного яйца.
								<br></br><br></br>
								В лаборатории консервированных ананасов познакомимся с тушенкой и разберемся в методах
								сохранения продуктов. Законсервируем парочку ананасов четырьмя разными способами и
								заберем все это домой, чтобы выяснить, какой метод консервации лучше. </p>
							<CarouselIframeBlock items={2}/>
						</div>
					</div>
					<div className={cn(style.block_back, "block_back")}></div>
				</div>
			</div>
			<div className={style.inner_2} ref={refBlock}>
				<div className="container">
					<div className='width_1'>
						<h2 className={cn(style.text_2, "h2-1 text-9_adaptive")}>Место проведения</h2>
						<div className={style.block_3}>
							<MapBlock/>
						</div>
					</div>
					<div className={style.block_4}>
						<h2 className={cn(style.text_4, "h2-1 text-9_adaptive")}>Другие мероприятия<br></br>организатора
						</h2>
						<AllActivity__Block_1_carousel/>
					</div>
				</div>
			</div>
			{completed &&
			<div className={cn(style.reviews, 'relative')}>
				<div className="container">
					<div className={style.reviews__block_1}>
						<h2 className={cn(style.reviews__text_1, "h2-1 text-9_adaptive")}>Отзывы о мероприятии</h2>
						<div className={style.reviews__item_1}>
							<Btn_openAll number={192}/>
						</div>
						<Rating rating={4} size={'middle'}/>
					</div>
					<div className={style.reviews__item_2}>
						<Btn_sorting title={'Дата написания'}/>
					</div>
					<div className={style.reviews__block_2}>
						{initialState.reviews.map(i =>
							<div className={style.reviews__block_2_item}>
								<div
									className={cn(style.reviews__block_2_item_inner, style.reviews__block_2_item_inner_1)}>
									<AvatarBlock text_1={'Антон Камолов'}
									             text_2={'17.12.2019, 17:32'}
									             text_1_Class={'text-3 text-5_adaptive'}
									             text_2_Class='text-5_adaptive'
									             img={i.avatar}
									             size={'low'}/>
								</div>
								<div
									className={cn(style.reviews__block_2_item_inner, style.reviews__block_2_item_inner_2)}>
									<div className={style.reviews__item_3}>
										<Rating rating={4} size={'middle'}/>
									</div>
									<p className="text-1">Очень интересное мероприятие! Спасибо организаторам!</p>
								</div>
							</div>
						)}
					</div>
					<AppraisalBlock padding_right/>
				</div>
				<div className={cn(style.block_back, "block_back")}></div>
			</div>}
		</div>
	)
};

export default Activity;