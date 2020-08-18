import React, {useState} from 'react';
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import cn from "classnames";
import btn_icon_1 from "../../assets/img/Navbar/btn-icon-1.svg";
import btn_icon_2 from "../../assets/img/Navbar/btn-icon-2.svg";
import btn_icon_3 from "../../assets/img/Navbar/btn-icon-3.svg";
import btn_icon_4 from "../../assets/img/Navbar/btn-icon-4.svg";
import btn_icon_5 from "../../assets/img/Navbar/btn-icon-5.svg";
import logo from "../../assets/img/Navbar/logo.svg";
import Modal from "./Modal/Modal";
import {useLocation} from "react-router-dom";

const Navbar = (props) => {

	let [modal, setModal] = useState(false);
	let [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		if (menu) {
			setMenu(false)
		} else setMenu(true)
	}

	let openModal = () => {
		setModal(true)
	};
	let closeModal = () => {
		setModal(false)
	};

	let navbarClass = null;

	let location = useLocation().pathname;

	if (location == '/') navbarClass = style.navbar_transparent

	let logoBlock = (
		<NavLink to="/" className={style.logo}>
			<img src={logo} alt="logo"/>
		</NavLink>
	)

	return (
		<nav className={cn(style.navbar, navbarClass)}>
			<div className={style.inner}>
				{logoBlock}
				<div className={cn("container flex-ver-center", style.block)}>
					{logoBlock}
					{props.isAuth &&
					<NavLink to="/activity" activeClassName={style.active}
					         className={cn(style.navlink, 'text-1 link')}>Мероприятия</NavLink>
					}
					<NavLink to="/about" activeClassName={style.active}
					         className={cn(style.navlink, 'text-1 link')}>О сервисе</NavLink>
					<NavLink to="/rating" activeClassName={style.active}
					         className={cn(style.navlink, 'text-1 link')}>Рейтинг</NavLink>
					<div className="flex-right flex-ver-center">
						{props.isAuth &&
						<NavLink to='/notifications' className={cn(style.btn_5, 'link')}>
							<img src={btn_icon_3} alt="icon_3"/>
							<div className={style.btn_5__block}>
								<p className={cn(style.btn_5__text, "text_white text-18")}>31</p>
							</div>
						</NavLink>
						}
						<NavLink to="/create_event" className={cn(style.btn_1, "btn btn-1 btn_height-1")}>
							<p className="text_white text-7">Создать мероприятие</p>
						</NavLink>
						{!props.isAuth &&
						<div className={cn('flex-ver-center', style.item)}>
							<div className={cn(style.btn_2, "btn btn-2 btn_height-1")} onClick={openModal}>
								<img src={btn_icon_1}/>
							</div>
						</div>
						}
						{props.isAuth &&
						<NavLink to="/profile/" className={cn(style.item, style.btn_4, 'btn btn-2 btn_height-1')}>
							<img src={btn_icon_2} alt="icon_2" className={cn(style.btn_icon_2, 'btn__icon_left')}/>
							<p className={cn("text-7", style.btn_4__text)}>Иванов Иван</p>
						</NavLink>
						}
						<div
							className={cn(style.item, style.btn_2, style.btn_6, menu && style.active, "btn btn-2 btn_height-1")}
							onClick={toggleMenu}>
							<img src={btn_icon_4} className={cn(style.icon_1, style.icon)}/>
							<img src={btn_icon_5} className={cn(style.icon_2, style.icon)}/>
						</div>
					</div>
				</div>
			</div>
			<div className={cn(style.menu, menu && style.active, 'active_adaptive')}>
				<div className={cn("container", style.menu__inner, props.isAuth && style.menu__inner_auth)}>
					<NavLink to="/create_event" className={cn("btn-1 btn btn_height-1", style.btn_7)}>
						<p className="text-7 text_white">Создать мероприятие</p>
					</NavLink>
					{props.isAuth &&
					<NavLink to="/activity"
					         className={cn(style.navlink_adaptive, 'text-1 link')}>Мероприятия</NavLink>
					}
					<NavLink to="/about" className={cn(style.navlink_adaptive, 'text-1 link')}>О сервисе</NavLink>
					<NavLink to="/rating" className={cn(style.navlink_adaptive, 'text-1 link')}>Рейтинг</NavLink>
				</div>
			</div>
			<Modal isOpen={modal} close={closeModal}/>
		</nav>
	)
};

export default Navbar;