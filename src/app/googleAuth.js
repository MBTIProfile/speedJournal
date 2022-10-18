import { initializeApp } from 'firebase/app';
import {
    getAuthResponse,
    setPersistence,
    browserSessionPersistence,
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { getFirebaseConfig } from '../firebase/fBase';
export const signOutGoogle = async (setUser) => {
    await signOut(getAuth())
    sessionStorage.removeItem("auth")
    setUser(false)
}

export const initializeFirebase = (setUser) => {
    console.log(
        'initializeFirebase()',
    )
    initializeApp(getFirebaseConfig());
    getAuth().onAuthStateChanged((user) => {
        const auth = sessionStorage.getItem("firebase:authUser:" + getFirebaseConfig().apiKey + ":[DEFAULT]")
        console.log(user)
        if(auth){
            setUser(true)
            sessionStorage.setItem("auth", auth)
        } else {
            setUser(false)
        }
    },setUser)
}
export const onGoogleClick = async (setUser) => {
    var provider = new GoogleAuthProvider();
    setPersistence(getAuth(), browserSessionPersistence).then(async () => {
        await signInWithPopup(getAuth(), provider);
        const auth = JSON.parse(sessionStorage.getItem("auth"))

        console.log(auth)
        const response = await (await fetch('http://222.112.129.129:9091/sessionLogin/', {
            method: "POST",
            body: JSON.stringify({ data: auth }),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json()

        setUser(true)
        return true
    });
}
