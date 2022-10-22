import {initializeApp, cert, getApps} from "firebase-admin/app"; //from npm library//1
import {getFirestore} from "firebase-admin/firestore";//2 from npm i library

import serviceAccount from "../secrets.js";  //3 

export default function dbConnect(){
    if(!getApps().length){
        initializeApp({
            credential : cert(serviceAccount)
        })
    }
return getFirestore()
} //defining function

//export means I'm going to use it somewhere else 