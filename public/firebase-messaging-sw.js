// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: 'AIzaSyBo49cdWRqBbNpx_G9E-_Yq0jsRVKyVWgw',
  authDomain: 'sinistre-666.firebaseapp.com',
  projectId: 'sinistre-666',
  storageBucket: 'sinistre-666.appspot.com',
  messagingSenderId: '288173480100',
  appId: '1:288173480100:web:eb7076a8d06f96aa4dae31',
  measurementId: 'G-ZYM9SJEFLQ',
})
// eslint-disable-next-line no-undef
const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function(payload) {
  // eslint-disable-next-line no-undef
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
      // eslint-disable-next-line no-undef
      return registration.showNotification('my notification title')
    })
  return promiseChain
})
// eslint-disable-next-line no-restricted-globals
self.addEventListener('notificationclick', function(event) {
  console.log(event)
})
