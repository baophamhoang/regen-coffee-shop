import { ref, getStorage } from "firebase/storage";

const getImg = ref(getStorage(), '/public/images/');

export default getImg;
