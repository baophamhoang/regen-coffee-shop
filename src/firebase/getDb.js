import { ref, getDatabase } from "firebase/database";

const getDb = (path) => {
    if (!path){
        return ref(getDatabase())
    }
    else {
        return ref(getDatabase(),path)
    }
}

export default getDb;
