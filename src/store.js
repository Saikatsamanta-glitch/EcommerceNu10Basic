import { createStore } from "redux";
import { cart_reducer } from "./redux/reducer";


const store = createStore(cart_reducer);
export default store;
