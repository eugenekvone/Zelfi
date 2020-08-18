import React from 'react';
import style from './Main.module.scss';
import cn from "classnames";
import AllActivity__Block_1 from "../Blocks/GridBlock/Containers/AllActivity__GridBlock";
import RecommendActivity__Block_1 from "../Blocks/GridBlock/Containers/RecommendActivity__GridBlock";
import MainReduxForm from "./MainForm/MainForm";
import block_back_2 from "../../assets/img/Main/block_back_2.svg";
import block_back_3 from "../../assets/img/Main/block_back_3.png";
import block_back_5 from "../../assets/img/Main/block_back_5.png";
import block_back_9 from "../../assets/img/Main/block_back_9.png";
import TopPartic__Block_2 from "../Blocks/CarouselBlock/Containers/TopPartic__CarouselBlock";

const Main = () => {
	return (
		<div className='container'>
			<div className={cn(style.block_back_1, 'block_back')}></div>
			<div className={cn(style.block_back_6, 'block_back')}></div>
			<div className={cn(style.block_back_7, 'block_back none_adaptive')}></div>
			<div className={cn(style.block_back_8, 'block_back')}></div>
			<h2 className={cn(style.title_1, 'h2-2')}>Найди или создай <br></br>свое мероприятие</h2>
			<div className="row">
				<div className={cn(style.block_1, 'form form_padding-1')}>
					<h2 className={cn(style.title_2, 'h2-2')}>Что ищете?</h2>
					<MainReduxForm/>
					<img src={block_back_5} alt="block_back_5" className={cn(style.block_back_5, 'block_back')}/>
					<img src={block_back_2} alt="block_back_2" className={cn(style.block_back_2, 'block_back')}/>
					<img src={block_back_3} alt="block_back_3"
					     className={cn(style.block_back_3, 'block_back none_adaptive')}/>
					<img src={block_back_9} alt="block_back_9"
					     className={cn(style.block_back_3, 'block_back active_adaptive')}/>
					<div className={cn(style.block_back_4, 'block_back')}>
						<div className={cn(style.block_back_4__inner, 'form')}></div>
					</div>
				</div>
			</div>
			<div className={style.block_2}>
				<h2 className={cn(style.title_3, 'h2-1')}><span>Рекомендуемые</span><br></br>мероприятия</h2>
				<RecommendActivity__Block_1/>
			</div>
			<div className={style.block_3}>
				<h2 className={cn(style.title_3, 'h2-1')}><span>Все мероприятия</span><br></br>Казани</h2>
				<AllActivity__Block_1/>
			</div>
			<div className={style.block_4}>
				<h2 className={cn(style.title_4, 'h2-1')}><span>Рейтинг</span><br></br>участников</h2>
				<TopPartic__Block_2/>
			</div>
		</div>
	)
};

export default Main;