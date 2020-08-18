import React, {useState} from "react";
import {Field} from "redux-form";
import styles from "./FormsControls.module.scss";
import stepper_icon_1 from "../../../assets/img/Elements/stepper_icon_1.svg";
import stepper_icon_2 from "../../../assets/img/Elements/stepper_icon_2.svg";


const FormControl = ({input, meta: {touched, error}, children}) => {
	const hasError = touched && error;
	return (
		<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
			<div>
				{children}
			</div>
			{hasError && <span>{error}</span>}
		</div>
	)
};

export const Input = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const Mail = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

export const Selector = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}>
		<input {...input} {...restProps} />
		<option></option>
		<option value="#ff0000">Red</option>
		<option value="#00ff00">Green</option>
		<option value="#0000ff">Blue</option>
	</FormControl>
};

export const Date = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const DateRange = (props) => {
	const {input, meta, child, ...restProps} = props;
	return (
		<FormControl {...props}>
			<input {...input} {...restProps}/>
		</FormControl>
	)
};

export const Time = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const Textarea = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Stepper = (props) => {
	const {input, meta, child, ...restProps} = props;

	let [value, setValue] = useState(0);

	let valuePlus = () => {
		setValue(value + 1)
	};
	let valueMinus = () => {
		if (value !== 0) setValue(value - 1)
	};

	return <FormControl {...props}>
		<div className="stepper">
			<div className="stepper-btn click_reaction" onClick={valueMinus}>
				<img src={stepper_icon_1} alt="stepper__icon_1"/>
			</div>
			<div className="input-wrap stepper-wrap">
				<input {...input} {...restProps} value={value} readOnly/>
			</div>
			<div className="stepper-btn click_reaction" onClick={valuePlus}>
				<img src={stepper_icon_2} alt="stepper__icon_2"/>
			</div>
		</div>
	</FormControl>
};

export const checkboxInput = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps}/>
		<label htmlFor={"checkbox-id-" + props.numb + "-" + props.index} className="checkbox-label">
			<div className="checkbox"></div>
			<p className="text-1 checkbox-title">{props.title}</p>
		</label>
	</FormControl>
};

export const radioInput_1 = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}>
		<input {...input} {...restProps} checked={props.onChange}/>
		<label htmlFor={"radio-id-" + props.numb + "-" + props.index} className="radio-label radio_1-label">
			<div className="radio radio_1"></div>
			<p className="text-7">{props.title}</p>
		</label>
	</FormControl>
};

export const radioInput_2 = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}>
		<input {...input} {...restProps} checked={props.onChange}/>
		<label htmlFor={"radio-id-" + props.numb + "-" + props.index} className="radio-label radio_2-label">
			<div className="radio radio_2"></div>
			<div className="flex-column">
				<p className="text-7">{props.title}</p>
				{props.text && <p className="text-1 none_adaptive">{props.text}</p>}
			</div>
		</label>
	</FormControl>
};

export const radioInput_3 = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}>
		<div className="flex-ver-center flex-column_adaptive">
			<input {...input} {...restProps} checked={props.onChange}/>
			<label htmlFor={"radio-id-" + props.numb + "-" + props.index} className="radio-label radio_3-label">
				<p className="radio_3-title text-1">{props.title}</p>
				{props.price && <p className="radio_3-price text-3 text-5_adaptive">{props.price}
					<span className='text-13 text-1_adaptive'>₽</span>
				</p>}
			</label>
			<p className="text-13 text_pink radio_3-text text-1_adaptive">{props.text}</p>
		</div>
	</FormControl>
};

export const radioInput_4 = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControl {...props}>
		<div>
			<input {...input} {...restProps} checked={props.onChange}/>
			<label htmlFor={"radio-id-" + props.numb + "-" + props.index} className="radio-label radio_4-label">
				<p className="radio_4-title text-1">{props.title}</p>
			</label>
		</div>
	</FormControl>
};

export const createField = (placeholder, name, validate, component, mask, warning, props = {}) => (
	<Field placeholder={placeholder}
	       name={name}
	       component={component}
	       validate={validate}
	       {...mask}
	       warn={warning}
	       {...props}/>
);