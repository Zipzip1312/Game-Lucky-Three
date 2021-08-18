import axios from 'axios'
import getPlayerParam from 'util/getPlayerParam'

axios.defaults.baseURL = 'http://games.epicentrk.test/api/'

/** Common request headers */
axios.interceptors.request.use(function (config) {
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  config.headers.token = getPlayerParam(false)
  return config
})

export async function getPlayerStatus() {
  const response = await axios.get('player')
  return response.data
}

export async function acceptRules() {
  await axios.post('accept-rules')
}

export async function saveProfile({ sex, birthday, messenger }) {
  await axios.post('profile', { sex, birthday, messenger })
}

export async function sendInvite() {
  await axios.post('send-invite')
}

export async function makePick(index) {
  const response = await axios.post('pick', { index })
  return response.data
}
