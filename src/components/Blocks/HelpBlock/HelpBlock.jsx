import React, {useState} from 'react';
import style from './HelpBlock.module.scss';
import cn from "classnames";
import TitleBlock from "../TitleBlock/TitleBlock";
import icon_1 from "../../../assets/img/Blocks/Block_23/icon_1.svg";
import icon_2 from "../../../assets/img/Blocks/Block_23/icon_2.svg";
import icon_3 from "../../../assets/img/Blocks/Block_23/icon_3.svg";
import icon_4 from "../../../assets/img/Blocks/Block_23/icon_4.svg";
import {NavLink, Route, useHistory} from "react-router-dom";
import TitleWrapBlock from "../TitleWrapBlock/TitleWrapBlock";
import NavBlock from "../NavBlock/NavBlock";
import Legal from "./Legal/Legal";
import Individ from "./Individ/Individ";

const HelpBlock = ({
	                  type,
	                  message,
	                  item,
	                  unitary,
	                  url,
	                  urlBack,
	                  nav,
	                  urlNext,
	                  onSubmit,
	                  submitForm,
	                  success,
	                  setRequisite
                  }) => {

	const history = useHistory();

	let formName = 'requisites_legal';
	if (nav && history.location.pathname == (url + nav[1].url)) formName = 'requisites_individ';

	if (success) history.push(urlNext);
	setRequisite(false);

	let [warningInputMode, setWarningInputMode] = useState(false);
	let [warningFileMode, setWarningFileMode] = useState(false);

	const requiredError = (action) => setWarningInputMode(action)

	let initialState = {
		radio_1: [
			{
				title: 'C НДС',
				numb: 1,
				index: 'C НДС',
			},
			{
				title: 'Без НДС',
				numb: 1,
				index: 'Без НДС',
			}
		],
	};

	var messageItem = null;
	var hocCase = false;

	let component = null;

	switch (type) {
		case 'create_event':
			messageItem = (
				<div className={style.block_1}>
					<TitleBlock spanTitle={'Внимание!'}
					            title={'Если Вы хотите получать пожертвования необходимо заполнить реквизиты. Вы может пропустить этот шаг.'}
					            url={urlNext}
					            btn/>
				</div>
			)
			break;
		case 'create_organization':
			messageItem = (
				<div className={style.block_1}>
					<TitleBlock spanTitle={'Внимание!'}
					            url={urlNext}
					            title={'Если Вы хотите получать пожертвования, выводить средства за проданные билеты, необходимо заполнить реквизиты. Вы может пропустить этот шаг и заполнить их на этапе создания мероприятий.'}
					            btn/>
				</div>
			)
			break;
		case 'output_means':
			hocCase = true;
			messageItem = (
				<div className={style.block_1}>
					<TitleBlock spanTitle={'Внимание!'}
					            url={urlNext}
					            title={'Для вывода средств по всем мероприятиям необходимо заполнить реквизиты!'}/>
				</div>
			)
			break;
		default:
			break;
	}

	let legal = <Legal requiredError={requiredError}
	                   radio={initialState.radio_1}
	                   warningInputMode={warningInputMode}
	                   onSubmit={onSubmit}/>;
	let individ = <Individ warningInputMode={warningInputMode}
	                       requiredError={requiredError}
	                       onSubmit={onSubmit}/>;

	switch (item) {
		case 'legal':
			component = legal;
			formName = 'requisites_legal';
			break;
		case 'individ':
			component = individ;
			formName = 'requisites_individ';
			break;
		default:
			break;
	}

	const submitFormFunc = () => submitForm(formName)

	let controls = (
		<div>
			<div className="form__series-wrap form__series-wrap-3 form__series-wrap-2_adaptive">
				<div className="form__series form__series-2 form__series-3_adaptive">
					<div className="btn btn-1 btn_height-1">
						<p className="text-7 text_white">Скачать договор</p>
					</div>
					<div className='order_-1_adaptive'>
						{!warningFileMode ?
							<div className='relative flex-ver-center_adaptive'>
								<img src={window.innerWidth > 812 ? icon_1 : icon_3} alt="icon_1"
								     className={style.icon}/>
							</div>
							:
							<div className='relative flex-ver-center_adaptive order_-3_adaptive'>
								<img src={window.innerWidth > 812 ? icon_2 : icon_4} alt="icon_2"
								     className={style.icon}/>
							</div>
						}
					</div>
				</div>
			</div>
			<p className={cn(style.text, "text-3 text-3_adaptive")}>Отправьте скан подписанного договора на нашу
				почту <a
					href="mailto:zelfi@mail.ru">zelfi@mail.ru</a></p>
			<div className="form__series-wrap">
				<div className="form__series form__series-2 form__series-1_adaptive">
					<NavLink to={urlBack} className="btn-2 btn btn_height-1">
						<p className="text-7">Назад</p>
					</NavLink>
					<div className="btn-1 btn btn_height-1 order_-1_adaptive" onClick={submitFormFunc}>
						<p className="text-7 text_white">Далее</p>
					</div>
					{warningInputMode &&
					<div className="input-item-5 input-item">
						<TitleWrapBlock title={'Чтобы продолжить заполните реквизиты!'}/>
					</div>
					}
					{warningFileMode &&
					<div className="input-item-5 input-item order_-2_adaptive">
						<TitleWrapBlock title={'Необходимо скачать договор'}/>
					</div>
					}
				</div>
			</div>
		</div>
	);

	return (
		<div>
			{unitary ?
				<div>
					{messageItem}
					{component}
					{controls}
				</div>
				:
				<NavBlock url={url} nav={nav} hocCase={hocCase} typeSecond>
					{message && messageItem}
					<Route exact path={url + nav[0].url} render={() => legal}/>
					<Route exact path={url + nav[1].url} render={() => individ}/>
					{controls}
				</NavBlock>
			}
		</div>
	)
};

export default HelpBlock;