import { createStore } from 'redux';
import rootReducer from '../reducers';

export default preLoadedState => createStore(rootReducer, preLoadedState);