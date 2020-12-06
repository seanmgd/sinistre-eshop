import axios from 'axios'

const data = {
  notification: {
    title: 'Wesh alors',
    body: 'Mets nous un 20/20 stp',
  },
  to: localStorage.getItem('notification-token'),
}
const options = {
  Authorization: `key=${process.env.REACT_APP_FIREBASE_CM_KEY}`,
  'Content-Type': 'application/json',
  Accept: '*',
}
export const sendNotification = () => {
  axios({
    method: 'POST',
    url: process.env.REACT_APP_FIREBASE_CM_URL,
    headers: options,
    data: data,
  })
}
