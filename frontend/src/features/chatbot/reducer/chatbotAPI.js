import axios from "axios"
const SERVER = 'http://127.0.0.1:8000/api/chatbot'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege..'
}

const findAnswer = x => axios.post(`${SERVER}/find-answer`, JSON.stringify(x), {headers})
const statusAnswer = x => axios.post(`${SERVER}/find-by-detail`, JSON.stringify(x), {headers})
const getStatus = () => axios.get(`${SERVER}/find-all`)
// const exist = x => axios.get(`${SERVER}/exist/${x}`)

export default {
  findAnswer,
  statusAnswer,
  getStatus
}