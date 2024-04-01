importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBOfnU7eWk2rFmetruNz8IQObQhLFM3FUY",
  authDomain: "rt-push-notification-322b6.firebaseapp.com",
  projectId: "rt-push-notification-322b6",
  storageBucket: "rt-push-notification-322b6.appspot.com",
  messagingSenderId: "414784846511",
  appId: "1:414784846511:web:5cb96b288efa55465a725a",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
