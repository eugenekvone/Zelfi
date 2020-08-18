import React from 'react';
import cn from "classnames";
import Title from "../Commons/Title/Title";
import {Route} from "react-router-dom";
import SendContainer from "./Send/SendContainer";
import PasswordContainer from "./Password/PasswordContainer";
import Success from "./Success/Success";
import MainContainer from "./Main/MainContainer";

const Recovery = (props) => {

    const main = props.links.mainLink;
    const nav = props.links.nav;

    return (
        <div className='content container'>
            <Title title={'Восстановление пароля'}/>
            <div className="case">
                <Route exact path={main} render={() => <MainContainer linkNext={main + nav[0]}/>}/>
                <Route path={main + nav[0]} render={() => <SendContainer linkNext={main + nav[1]}/>}/>
                <Route exact path={main + nav[1]} render={() => <PasswordContainer linkNext={main + nav[2]}/>}/>
                <Route exact path={main + nav[2]} render={() => <Success/>}/>
            </div>
        </div>
    )
};

export default Recovery;