import React from 'react';
import style from './IframeBlock.module.scss';
import cn from "classnames";

const IframeBlock = ({imgs}) => {
	return (
		<div>
			{imgs &&
			<div className={style.block}>
				{imgs.map(img =>
					<div className={cn(style.item, 'img_center-wrap')}>
						{(typeof (img) == 'object') ?
							<iframe width="560" height="315" src={img} frameBorder="0" allowFullScreen></iframe>
							:
							<img src={img} alt='img_1' className='img_center-height'/>
						}
					</div>
				)}
			</div>
			}
		</div>
	)
};

export default IframeBlock;