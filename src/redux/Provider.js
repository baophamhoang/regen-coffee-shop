import { Provider } from "react-redux";
import { store } from './store';

const store = store();

export default Provider(store={store});