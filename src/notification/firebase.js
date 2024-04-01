// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOfnU7eWk2rFmetruNz8IQObQhLFM3FUY",
  authDomain: "rt-push-notification-322b6.firebaseapp.com",
  projectId: "rt-push-notification-322b6",
  storageBucket: "rt-push-notification-322b6.appspot.com",
  messagingSenderId: "414784846511",
  appId: "1:414784846511:web:5cb96b288efa55465a725a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BJ2jUN6baC9hdJoykjDPOrObgav5h5cNBILmYvRRO1eDCg5koz2H2hu_5qNg8KkNuH31I4kjl93I8gOi9U7-RsY",
    });
    console.log("Token: ", token);
  }
};
