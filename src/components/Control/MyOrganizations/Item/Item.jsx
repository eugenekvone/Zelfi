import React from 'react';
import ContractBlock from "../../../Blocks/ContractBlock/ContractBlock";


const Item = ({title, contract, items_2, type, url_1, modal}) => {
	return <ContractBlock title={title}
	                      contract={contract}
	                      items_2={items_2}
	                      type={type}
	                      url_1={url_1}
	                      modal={modal}/>
};

export default Item;