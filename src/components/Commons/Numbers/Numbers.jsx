import React from 'react';
import style from './Numbers.module.scss';
import cn from "classnames";


const Numbers = ({items}) => {
	return (
		<ol>
			{items.map(i =>
				<li className={cn("text_pink text-13 text-3_adaptive", style.item)}>
					<span className="text-15 text-3_adaptive text_black">{i}</span>
				</li>
			)}
		</ol>
	)
};

export default Numbers;