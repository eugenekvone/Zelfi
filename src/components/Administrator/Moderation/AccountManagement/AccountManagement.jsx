import React from 'react';
import AccountManagementReduxForm from "./AccountManagementForm/AccountManagementForm";
import Item from "./Item/Item";
import img from "../../../../assets/img/initialState/AccountManagement/img.jpg";


const AccountManagement = () => {

	let initialState = {
		items: [
			{img: img, blocked: false},
			{img: img, blocked: true},
			{img: img, blocked: false},
			{img: img, blocked: false},
			{img: img, blocked: true},
			{img: img, blocked: false},
		]
	};

	return (
		<div>
			<AccountManagementReduxForm/>
			<div className="inner_2">
				{initialState.items.map(i =>
					<Item blocked={i.blocked} img={i.img}/>
				)}
			</div>
		</div>
	)
};

export default AccountManagement;