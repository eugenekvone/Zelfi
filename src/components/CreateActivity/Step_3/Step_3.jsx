import React from 'react';
import style from "./Step_3.module.scss";
import TitleBlock from "../../Blocks/TitleBlock/TitleBlock";
import ContactBlock from "../../Blocks/ContactBlock/ContactBlock";
import CarouselIframeBlock from "../../Blocks/CarouselIframeBlock/CarouselIframeBlock";
import cn from "classnames";
import IframeBlock from "../../Blocks/IframeBlock/IframeBlock";
import {NavLink} from "react-router-dom";


const Step_3 = (props) => {

	let activity = props.activity;

	return (
		<div className="flex-column">
			<div className={style.block_1}>
				<TitleBlock
					spanTitle={'Проверьте ваше мероприятие на наличие ошибок, если все в порядке - отправляйте на модерацию.'}/>
			</div>
			<div className="block_5 flex-column">
				<div className={style.block_5}>
					<ContactBlock title={activity.title}
					              phone={activity.contact_phone}
					              email={activity.contact_email}
					              organizer={activity.organizer}
					              dates={props.dates}
					              imgMain={props.main_img}
					              address={activity.address}/>
				</div>
				{props.gallery.length >= 3 && props.gallery.length !== 0 &&
				<div className={style.block_4}>
					<CarouselIframeBlock item={3} imgs={props.gallery}/>
				</div>
				}
				{props.gallery.length < 3 && props.gallery.length !== 0 &&
				<div className={style.block_2}>
					<IframeBlock imgs={props.gallery}/>
				</div>
				}
				<div className='block_3'>
					<p className={cn(style.text, "text-14")}>
						{activity.description}
					</p>
				</div>
				<div className="form__series-wrap">
					<div className="form__series form__series-6 inner_1_adaptive">
						<NavLink to={props.urlBack} className="btn-2 btn btn_height-1">
							<p className="text-7">Назад</p>
						</NavLink>
						<NavLink to={props.urlNext} className="btn-1 btn btn_height-1 order_-1_adaptive"
						         onClick={props.onSubmit}>
							<p className="text-7 text_white">Отправить на модерацию</p>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Step_3