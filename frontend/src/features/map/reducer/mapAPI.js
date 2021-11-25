import axios from "axios"
const SERVER = 'http://127.0.0.1:8000/api/map'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege..'
}

const world = () => axios.get(`${SERVER}/world`)
const medPoint = x => axios.get(`${SERVER}/med-point/${x}`)
const medPoints = x => axios.post(`${SERVER}/med-points`, JSON.stringify(x), {headers})
const cases = x => axios.post(`${SERVER}/cases-points`, JSON.stringify(x), {headers})

export default {
  world,
  medPoint,
  medPoints,
  cases,
}