import React, {useRef, useState} from 'react';
import cn from "classnames";
import {
	createField,
	Input,
	Time,
	Stepper,
	Textarea,
} from "../FormsControls/FormsControls";

import time_icon from "../../../assets/img/Elements/time_icon.svg";
import date_icon from "../../../assets/img/Elements/date_icon.svg";
import navPrevIcon from "../../../assets/img/Elements/navPrev.svg";
import navNextIcon from "../../../assets/img/Elements/navNext.svg";
import selector_icon from "../../../assets/img/Elements/selector_icon.svg";
import search_icon from "../../../assets/img/Elements/search_icon.svg";
import address_icon from "../../../assets/img/Elements/address_icon.svg";
import BtnClose from "../Btns/BtnClose/BtnClose";
import Radio from "../Radio/Radio";
import DatePickerWidgets from 'react-widgets/lib/DatePicker'
import {createNumberMask, createTextMask} from "redux-form-input-masks";
import 'react-widgets/dist/css/react-widgets.css'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import {DateRangePicker} from "react-dates";
import {Required} from "../../../utils/Required";
import 'moment/locale/ru'
import {
	emailValidate,
	passwordConfirm,
	timeValidate,
	validateNone
} from "../../../utils/Validation";
import Select from 'react-select';
import style from "../../CreateActivity/Step_1/Step_1_Form/Step_1_Form.module.scss";
import img from "../../../assets/img/initialState/CreateEvent/img.jpg";
import icon_1 from "../../../assets/img/CreateEvent/icon_1.svg";
import {date} from "redux-form-validators";


const ItemInput = ({
	                   itemInputClass,
	                   itemInputTitle,
	                   itemInputTitleClass,
	                   itemInputTitleSpan,
	                   itemInputTitleMark,
	                   wrapClass,
	                   inputClass,
	                   name,
	                   value,
	                   placeholder,
	                   disabled,
	                   disabled_trans,
	                   input,
	                   close,
	                   inputInvalid,
	                   radioItems,
	                   type,
	                   required,
	                   options,
	                   selector_type,
	                   password_confirm,
	                   setDate,
	                   openModal,
	                   closeFunc,
	                   ...props
                   }) => {

	const DropdownIndicator = () => {
		return <img src={selector_icon} className='click_reaction select_icon'/>
	};

	const ReduxFormSelect = props => {
		let selectClass = ''
		if (required && props.meta.invalid && props.meta.submitFailed) selectClass = 'invalid';
		const {input, options} = props;
		return (
			<Select
				{...input}
				onChange={input.onChange}
				onBlur={input.onBlur(input.value)}
				className={cn('select', selectClass)}
				classNamePrefix='select'
				components={{DropdownIndicator}}
				placeholder={placeholderValue}
				options={options}/>
		)
	}

	const inputElement = useRef(null);
	const inputWrap = useRef(null);

	const phoneMask = createTextMask({
		pattern: '+7 (999) 999-99-99',

	});
	const dateMask = createTextMask({
		pattern: '99.99.9999',
	});
	const timeMask = createTextMask({
		pattern: '99:99',
	});
	const priceMask = createNumberMask({
		suffix: ' ₽',
	});

	let disabledClass = null;
	if (disabled) disabledClass = 'disabled';
	if (disabled_trans) disabledClass = '';

	let item = Input;
	let icon = null;
	let classes_1 = "input-wrap";
	let classes_2 = 'input';
	let invalidClass = null;
	let radio = false;
	let mask = null;
	let validate = validateNone;
	let warning = null;
	let placeholderValue = placeholder;
	let optionsValue = options

	const renderDateTimePicker = ({input: {onChange, value}}) => {
		return (
			<DatePickerWidgets
				onChange={onChange}
				placeholder={placeholderValue}
				required={required}
				name={name}
				disabled={disabled}
				defaultValue={new window.Date()}
				dateFormat="DD.MM.YYYY"
				value={(value && (value !== 'Invalid Date')) ? new window.Date(value) : null}/>
		)
	}

	let [startDate, setStartDate] = useState(new window.Date());
	let [endDate, setEndDate] = useState(new window.Date());
	let [focus, setFocus] = useState(false);

	const dateIcon = (<img src={date_icon}></img>)
	const dateLine = (<p className="text-1"> - </p>)
	const navPrev = (<img src={navPrevIcon} alt="navPrev"/>)
	const navNext = (<img src={navNextIcon} alt="navPrev"/>)

	const renderRangeDatePicker = () => {
		return (
			<DateRangePicker
				readOnly
				startDate={moment(startDate)} // momentPropTypes.momentObj or null,
				startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
				endDate={moment(endDate)} // momentPropTypes.momentObj or null,
				endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
				focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
				onFocusChange={focusedInput => setFocus(focusedInput)}
				customInputIcon={dateIcon}
				customArrowIcon={dateLine}
				navPrev={navPrev}
				navNext={navNext}
				displayFormat="MM.DD.YYYY"
				noBorder
				inputIconPosition="after"
				onDatesChange={({startDate, endDate}) => {
					setStartDate(startDate);
					setEndDate(endDate);
				}} // PropTypes.func.isRequired//
			/>
		)
	}

	const optionsRedactor = (options) => {
		if (options) {
			optionsValue = [];
			for (let i = 0; i < options.length; i++) {
				optionsValue.push({
					label: options[i].attributes.title,
					value: options[i].id
				})
			}
		}
	}

	let btnCopyLink = () => null

	switch (selector_type) {
		case 'organization':
			if (options) {
				optionsValue = [];
				for (let i = 0; i < options.length; i++) {
					optionsValue.push({
						label: options[i].attributes.name,
						value: options[i].id
					})
				}
			}
			placeholderValue = 'Выберите организацию'
			break;
		case 'categorys':
			optionsRedactor(options);
			placeholderValue = 'Выберите категорию'
			break;
		case 'age_ratings':
			optionsRedactor(options);
			placeholderValue = 'Выберите рейтинг'
			break;
		case 'citys':
			optionsRedactor(options);
			placeholderValue = 'Выберите город'
			break;
		default:
			break;
	}

	let today = new Date();

	const pad = (num, size) => {
		let s = num + "";
		while (s.length < size) s = "0" + s;
		return s;
	}

	switch (input) {
		case 'date':
			item = renderDateTimePicker;
			placeholderValue = pad(today.getDay(), 2) + '.' + pad((today.getMonth() + 1), 2) + '.' + today.getFullYear();
			wrapClass = 'input-wrap_date';
			break;
		case 'fullName':
			placeholderValue = 'Иван Иванов Иванович';
			break;
		case 'firstName':
			placeholderValue = 'Иван';
			break;
		case 'secondName':
			placeholderValue = 'Иванов';
			break;
		case 'thirdName':
			placeholderValue = 'Иванович';
			break;
		case 'city':
			placeholderValue = 'Казань';
			break;
		case 'password':
			placeholderValue = 'Введите пароль';
			type = 'password';
			break;
		case 'phone':
			mask = phoneMask;
			break;
		case 'video':
			btnCopyLink = () => (
				<div className={cn(style.btn_1, "btn-2 btn btn_height-3")}>
					<img src={icon_1} alt="icon_1"/>
				</div>
			)
			break;
		case 'email':
			placeholderValue = 'event@event.ru';
			validate = emailValidate;
			break;
		case 'date-only':
			mask = dateMask;
			placeholderValue = '20.12.2020';
			validate = date({format: 'ddmmyyyy', msg: 'Введите корректную дату'});
			break;
		case 'date-range':
			item = renderRangeDatePicker;
			wrapClass = 'input-wrap_date';
			break;
		case 'time':
			item = Time;
			icon = <img src={time_icon} alt="time_icon" className="input_icon time_icon"/>;
			mask = timeMask;
			validate = timeValidate;
			break;
		case 'selector':
			item = ReduxFormSelect;
			wrapClass = 'input-wrap_select';
			break;
		case 'search':
			icon = <img src={search_icon} alt="selector_icon" className="input_icon search_icon click_reaction"/>;
			break;
		case 'address':
			icon = (
				<div className='input_icon-wrap click_reaction' onClick={openModal}>
					<img src={address_icon} alt="address_icon" className="address_icon"/>
				</div>
			);
			break;
		case 'ruble':
			icon = <p className='text-1 input_icon-wrap_ruble'>₽</p>;
			break;
		case 'textarea':
			item = Textarea;
			classes_1 = "textarea-wrap";
			classes_2 = 'textarea';
			break;
		case 'stepper':
			item = Stepper;
			classes_1 = 'stepper';
			classes_2 = 'input stepper-input';
			type = 'number';
			break;
		case 'radio':
			radio = true;
			break;
		case 'price':
			mask = priceMask;
			break;
		default:
			break;
	}

	let passwordConfirmItem = validateNone;

	const requiredItem = Required(required, 'input');

	if (password_confirm) passwordConfirmItem = passwordConfirm;

	return (
		<div className={cn(itemInputClass, 'input-item')}>
			{itemInputTitle ?
				<p className={cn(itemInputTitleClass, "input-title text-7")}>{itemInputTitle} {itemInputTitleSpan &&
				<span>{itemInputTitleSpan}</span>}
					{itemInputTitleMark && <mark className='text_pink'>{itemInputTitleMark}</mark>}</p> : null}
			<div className={cn(classes_1, wrapClass, disabledClass, invalidClass)} ref={inputWrap}>
				{btnCopyLink()}
				{!radio ? createField(
					placeholderValue,
					name,
					[requiredItem, validate, passwordConfirmItem],
					item,
					mask,
					warning,
					{
						type: type,
						className: classes_2 + ' text-8 ' + inputClass,
						disabled: disabled,
						ref: inputElement,
						options: optionsValue
					})
					:
					<Radio radio={4} items={radioItems} name={name}/>
				}
				{icon}
				{close && <BtnClose closeInput close={closeFunc}/>}
			</div>
		</div>
	);
};

export default ItemInput;