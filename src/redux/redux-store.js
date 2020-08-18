import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import activityReducer from "./reducers/activity-reducer";
import create_activityReducer from "./reducers/create_activity-reducer";
import blocksReducer from "./reducers/blocks-reducer";
import authReducer from "./reducers/auth-reducer";
import publicReducer from "./reducers/public-reducer";
import {reducer as formReducer} from 'redux-form'
import particReducer from "./reducers/partic-reducer";
import methodsReducer from "./reducers/methods-reducer";
import organizationsReducer from "./reducers/organizations-reducer";
import activitysReducer from "./reducers/activitys-reducer";
import create_organizationReducer from "./reducers/create_organization-reducer";

let reducers = combineReducers({
	app: appReducer,
	activity: activityReducer,
	activitys: activitysReducer,
	create_activity: create_activityReducer,
	create_organization: create_organizationReducer,
	organizations: organizationsReducer,
	auth: authReducer,
	methods: methodsReducer,
	partic: particReducer,
	blocks: blocksReducer,
	public: publicReducer,
	form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;