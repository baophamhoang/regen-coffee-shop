import { ref, getDatabase } from "firebase/database";
import { app } from "./firebase";
const getDb = (path) => {
    if (!path){
        return ref(getDatabase(app))
        
    }
    else {
        return ref(getDatabase(app),path)
    }
}

export default getDb;