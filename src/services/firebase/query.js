import axios from 'axios'

const data = {
  notification: {
    title: 'Title test',
    body: 'body message test',
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
