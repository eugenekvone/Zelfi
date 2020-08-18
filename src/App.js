import React, {useEffect} from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import {connect, Provider} from "react-redux";
import {BrowserRouter, HashRouter, Route, useLocation, withRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {compose} from "redux";
import cn from "classnames";
import {initializeApp} from "./redux/reducers/app-reducer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ActivityContainer from "./components/Activity/ActivityContainer";
import Notifications from "./components/Notifications/Notifications";
import style from './App.module.scss';
import Profile from "./components/Profile/Profile";
import Control from "./components/Control/Control";
import CreateActivity from "./components/CreateActivity/CreateActivity";
import Partners from "./components/Partners/Partners";
import Members from "./components/Members/Members";
import Buy from "./components/Buy/Buy";
import Organization from "./components/Organization/Organization";
import Administrator from "./components/Administrator/Administrator";
import Registration from "./components/Registration/Registration";
import Recovery from "./components/Recovery/Recovery";
import About from "./components/About/About";
import Rating from "./components/Rating/Rating";
import Login from "./components/Login/Login";
import CreateOrganizationContainer from "./components/CreateOrganization/CreateOrganizationContainer";
import New from "./components/New/New";
import ContactsContainer from "./components/Contacts/ContactsContainer";
import {links} from "./components/Links/Links";


const App = () => {

    useEffect(() => window.scrollTo(0, 0), [useLocation()]);

    return (
        <div className='app-wrapper'>
            <NavbarContainer/>
            <Route path='/' exact render={() => <Main />}/>
            <Route path={links[0].mainLink} render={() => <Control links={links[0]}/>}/>
            <Route path={links[1].mainLink} render={() => <Profile links={links[1]}/>}/>
            <Route path={links[2].mainLink} render={() => <Administrator links={links[2]}/>}/>
            <Route path={links[3].mainLink} render={() => <CreateActivity links={links[3]}/>}/>
            <Route path={links[4].mainLink} render={() => <CreateOrganizationContainer links={links[4]}/>}/>
            <Route path={links[5].mainLink} render={() => <Notifications links={links[5]}/>}/>
            <Route path={links[6].mainLink} render={() => <Registration links={links[6]}/>}/>
            <Route path={links[7].mainLink} render={() => <Recovery links={links[7]}/>}/>
            <Route path={links[8]} render={() => <ActivityContainer/>}/>
            <Route path={links[9]} render={() => <ActivityContainer completed/>}/>
            <Route path={links[10]} render={() => <ActivityContainer organizer/>}/>
            <Route path={links[11]} exact render={() => <About/>}/>
            <Route path={links[12]} exact render={() => <Partners/>}/>
            <Route path={links[13]} exact render={() => <Members/>}/>
            <Route path={links[14]} render={() => <Buy/>}/>
            <Route path={links[15]} render={() => <Organization/>}/>
            <Route path={links[16]} render={() => <ContactsContainer/>}/>
            <Route path={links[17]} render={() => <Rating/>}/>
            <Route path={links[18]} render={() => <Login/>}/>
            <Route path='/new' render={() => <New/>}/>
            <Footer/>

            <div className={cn("block_back block_back_full block_back_grey", style.block_back)}></div>
        </div>
    )
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const ZelfiApp = () => {
  return (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
  )
};

export default ZelfiApp;
