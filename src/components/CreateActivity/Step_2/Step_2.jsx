import React, {useState} from 'react';
import Step_2_ReduxForm from "./Step_2_Form/Step_2_Form";
import {NavLink, useHistory} from "react-router-dom";
import QuestionReduxForm from "./Step_2_Form/QuestionForm";
import cn from "classnames";
import RadioForm from "./Step_2_Form/RadioForm";
import TicketReduxForm from "./Step_2_Form/TicketForm";
import style from './Step_2.module.scss';
import TicketBlock from "../../Blocks/TicketBlock/TicketBlock";


const Step_2 = (props) => {
	return (
		<div>
			<RadioForm data_dates={props.data_dates}/>
			<TicketReduxForm onSubmit={props.addTicket}/>
			<div className={style.block_2_wrap}>
				{props.date_now.map(k =>
					<div className={style.block_2}>
						{k.tickets && k.tickets.map(i => <TicketBlock title={i.other.name}
						                                              price={i.other.price}
						                                              number={i.other.number}
						                                              free={i.other.free}
						                                              id={i.other.id}
						                                              date={k.other.start.date}
						                                              timeStart={k.other.start.time}
						                                              timeEnd={k.other.end.time}
						                                              ticketDelete={props.ticketDelete}
						                                              index={k.other.index}
						                                              unlimited={i.other.unlimited}/>)}
					</div>
				)}
			</div>
			<Step_2_ReduxForm/>
			<QuestionReduxForm onSubmit={props.addQuestion}/>
			<div className="form__series-wrap">
				<div className="form__series form__series-6 form__series-1_adaptive">
					<NavLink to={props.urlBack} className="btn-2 btn btn_height-1">
						<p className="text-7">Назад</p>
					</NavLink>
					<NavLink to={props.urlNext} className="btn-1 btn btn_height-1 order_-1_adaptive">
						<p className="text-7 text_white">Далее</p>
					</NavLink>
				</div>
				<div className={cn(style.block_4, "form__series form__series-4 none_adaptive")}>
					<div className="btn-2 btn btn_height-1">
						<p className="text-7">Отменить</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Step_2