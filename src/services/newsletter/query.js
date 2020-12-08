import axios from 'axios'

const options = {
  'Content-Type': 'application/json',
  Accept: '*',
}

export function sendMessage() {
  const subscribe = data => {
    axios({
      method: 'POST',
      url: process.env.REACT_APP_MAILCHIMP_URL,
      headers: options,
      data: data,
    })
  }

  return { subscribe }
}
