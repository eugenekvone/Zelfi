import React from 'react';
import style from './MyActivities.module.scss';
import cn from "classnames";
import NavBlock from "../../Blocks/NavBlock/NavBlock";
import {Redirect, Route} from "react-router-dom";
import Relevant from "./Relevant/Relevant";
import Modernization from "./Modernization/Modernization";
import Past from "./Past/Past";
import {NumbFormat} from "../../../utils/NumbFormat";


const MyActivities = ({mainLink, nav, url, relevantItems, pastItems, modernizationItems}) => {
	return (
		<div>
			<Redirect to={url + 'relevant'}/>
			<div className={style.block_1}>
				<div className={style.block_2}>
					<p className="text-7">Всего зарегистрировано на мероприятия</p>
					<p className={cn(style.text_1, "text-19 text_pink text-2_adaptive")}>{NumbFormat(12233)}</p>
					<div className={style.block_3}>
						<div className={style.block_4}>
							<p className="text-1">На платные</p>
							<p className="text-19 text_pink text-2_adaptive">{NumbFormat(8925)}</p>
						</div>
						<div className={style.block_4}>
							<p className="text-1">На бесплатные</p>
							<p className="text-19 text_pink text-2_adaptive">{NumbFormat(3462)}</p>
						</div>
					</div>
				</div>
				<div className={style.block_2}>
					<p className="text-7">Сумма проданных билетов с учетом комиссии Zelfi</p>
					<p className={cn(style.text_2, "text-19 text_pink text-2_adaptive")}>{NumbFormat(124280)} ₽</p>
					<p className="text-7">Сумма пожертвований с учетом комиссии Zelfi</p>
					<p className="text-19 text_pink text-2_adaptive">{NumbFormat(24721)} ₽</p>
				</div>
			</div>
			<NavBlock nav={nav} url={url} hocCase>
				<Route exact path={url + nav[0].url + '/'}
				       render={() => <Relevant items={relevantItems} mainLink={mainLink}/>}/>
				<Route exact path={url + nav[1].url + '/'} render={() => <Past items={pastItems}/>}/>
				<Route exact path={url + nav[2].url + '/'} render={() => <Modernization items={modernizationItems}/>}/>
			</NavBlock>
		</div>
	)
};

export default MyActivities;