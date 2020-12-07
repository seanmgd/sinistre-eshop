importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyBo49cdWRqBbNpx_G9E-_Yq0jsRVKyVWgw',
  authDomain: 'sinistre-666.firebaseapp.com',
  projectId: 'sinistre-666',
  storageBucket: 'sinistre-666.appspot.com',
  messagingSenderId: '288173480100',
  appId: '1:288173480100:web:eb7076a8d06f96aa4dae31',
  measurementId: 'G-ZYM9SJEFLQ',
})
const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i]
        windowClient.postMessage(payload)
      }
    })
    .then(() => {
      return registration.showNotification('my notification title')
    })
  return promiseChain
})
self.addEventListener('notificationclick', function(event) {
  console.log(event)
})
