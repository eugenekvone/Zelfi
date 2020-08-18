import React from 'react';
import style from './Footer.module.scss';
import cn from "classnames";
import redbox_logo from "../../assets/img/Footer/redbox_logo.svg";
import logo from "../../assets/img/Footer/logo.svg";
import social__item_icon_1 from "../../assets/img/Footer/social__item_icon_1.svg";
import social__item_icon_2 from "../../assets/img/Footer/social__item_icon_2.svg";
import social__item_icon_4 from "../../assets/img/Footer/social__item_icon_4.svg";
import link__icon_1 from "../../assets/img/Footer/link__icon_1.svg";
import link__icon_2 from "../../assets/img/Footer/link__icon_2.svg";
import {NavLink} from "react-router-dom";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.block_1}>
				<div className={cn(style.block_1__inner, 'container')}>
					<NavLink to="/" className={style.logo}>
						<img src={logo} alt="logo"/>
					</NavLink>
					<div className={style.block_3}>
						<NavLink to="/" className="link">
							<p className={cn(style.text_3, 'text-1')}>Мероприятия</p>
						</NavLink>
						<NavLink to="/partners" className="link">
							<p className={cn(style.text_3, 'text-1')}>Партнерам</p>
						</NavLink>
						<a href="mailto:info@zelfi.com" className={cn(style.link, "link flex-ver-center")}>
							<img src={link__icon_1} alt="link__icon_1" className={style.link__icon}/>
							<p className={cn(style.text_3, style.text_3_underline, 'text-1')}>info@zelfi.com</p>
						</a>
						<NavLink to="/about" className="link">
							<p className={cn(style.text_3, 'text-1')}>О сервисе</p>
						</NavLink>
						<NavLink to="/rating" className="link">
							<p className={cn(style.text_3, 'text-1')}>Рейтинг</p>
						</NavLink>
						<a href="#" className={cn(style.link, "link flex-ver-center")}>
							<img src={link__icon_2} alt="link__icon_2" className={style.link__icon}/>
							<p className={cn(style.text_3, style.text_3_underline, 'text-1')}>Подписаться на
								рассылку</p>
						</a>
						<NavLink to="/contacts" className={cn(style.link_column2, 'link')}>
							<p className={cn(style.text_3, 'text-1')}>Контакты</p>
						</NavLink>
					</div>
					<div className="flex-ver-center flex-top">
						<a href="#" className={cn(style.social__item, 'link')}>
							<img src={social__item_icon_1} alt="social__item_icon"/>
						</a>
						<a href="https://instagram.com/zelfi.ru?igshid=ofoyqifawqb2"
						   className={cn(style.social__item, 'link')}>
							<img src={social__item_icon_2} alt="social__item_icon"/>
						</a>
						<a href="https://vk.com/zelfi" className={cn(style.social__item, 'link')}>
							<img src={social__item_icon_4} alt="social__item_icon"/>
						</a>
					</div>
				</div>
			</div>
			<div className={style.block_2}>
				<div className={cn(style.block_2__inner, 'container')}>
					<p className={cn(style.text_1, 'text-1')}>© 2020 | Zelfi</p>
					<div className="flex-ver-center flex-right">
						<p className={cn(style.text_2, 'text-2')}>Сделано в</p>
						<a href="https://rdbx.ru/" className={cn(style.block_2__link, 'link')}>
							<img src={redbox_logo} alt="redbox_logo"/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
};

export default Footer;