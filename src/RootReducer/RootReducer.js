import {combineReducers} from "redux";
import { PlayerActionReducer } from "../Component/Players/PlayerActionReducer";

const RootReducer = combineReducers({Players:PlayerActionReducer});

export default RootReducer;
