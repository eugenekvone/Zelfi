import React from 'react';
import Block_23_Container from "../../Blocks/HelpBlock/HelpBlock_Container";

const Info = ({url, urlBack, urlNext, onSumbit}) => {
	return (
		<Block_23_Container url={urlBack}
		                    urlBack={url}
		                    urlNext={urlNext}
		                    onSubmit={onSumbit}
		                    message
		                    type={'create_organization'}
		                    unitary
		                    item={'legal'}/>
	)
};

export default Info;