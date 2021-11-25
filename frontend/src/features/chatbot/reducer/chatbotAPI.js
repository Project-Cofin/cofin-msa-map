import axios from "axios"
const SERVER = 'http://localhost:8080/api/chatbot'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege..'
}

const findAnswer = x => axios.post(`${SERVER}/find-answer`, JSON.stringify(x), {headers})
// const exist = x => axios.get(`${SERVER}/exist/${x}`)

export default {
  findAnswer,
//   exist,
}