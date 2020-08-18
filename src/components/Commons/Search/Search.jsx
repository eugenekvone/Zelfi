import React from 'react';
import btn__icon from "../../../assets/img/Main/btn__icon.svg";
import ItemInput from "../ItemInput/ItemInput";
import cn from "classnames";


const Search = ({placeholder, title, btn_none_adaptive}) => {
	return (
		<div className="form__series form__series-1">
			<ItemInput
				name={'main_search'}
				itemInputClass={'input-item-1'}
				placeholder={placeholder}
				wrapClass={'input-wrap_height-1'}
				itemInputTitle={title}
				input={'search'}
				inputClass={'text-3'}/>
			<div className={cn("btn btn-1 btn_height-2 flex-bottom", btn_none_adaptive && 'none_adaptive')}>
				<p className="text-7 text_white">Найти</p>
				<img src={btn__icon} alt="btn__icon" className="btn__icon_right"/>
			</div>
		</div>
	)
};

export default Search;