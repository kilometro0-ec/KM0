importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-sw.js');

const firebaseConfig = {
  apiKey: "AIzaSyB4ozxodUbFz65PIjGVynZpa-mA1BXZnjo",
  authDomain: "km0-web-app.firebaseapp.com",
  projectId: "km0-web-app",
  storageBucket: "km0-web-app.firebasestorage.app",
  messagingSenderId: "685305561021",
  appId: "1:685305561021:web:28a3322aa18c1eee0a9cd4"
};

// Inicializa Firebase en el Service Worker
firebase.initializeApp(firebaseConfig);

// Recupera Firebase Messaging
const messaging = firebase.messaging();

// Manejador de mensajes en segundo plano (cuando la app está cerrada)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje recibido en segundo plano:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/images/logo-trans.png' // Asegúrate que esta ruta sea correcta
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
