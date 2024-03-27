// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { 
    API_KEY, AUTH_DOMAIN, PROJECT_ID, 
    STORAGE_BUCKET, MESSAGING_SENDERID, APP_ID, MEASUREMENT_ID,
    VAPID_KEY
 } from '../utils/constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDERID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async() => {
    const permission = await Notification.requestPermission();
    if(permission === 'granted'){
        const token = await getToken(messaging, {
            vapidKey: VAPID_KEY
        });
        console.log('token', token);
    }else{
        console.log('permission denied');
    }
}