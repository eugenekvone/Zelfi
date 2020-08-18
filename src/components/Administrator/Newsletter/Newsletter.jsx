import React from 'react';
import style from './Newsletter.module.scss';
import cn from "classnames";
import NewsletterReduxForm from "./NewsletterForm/NewsletterForm";


const Newsletter = () => {
	return (
		<div className='case'>
			<p className={cn("text-29 text-4_adaptive", style.text_1)}>Рассылка</p>
			<NewsletterReduxForm/>
		</div>
	)
};

export default Newsletter;