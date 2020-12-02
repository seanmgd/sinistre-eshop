import axios from 'axios'

export const sendMessage = data =>
  axios.post(process.env.REACT_APP_API_URL + '/contact', data)
