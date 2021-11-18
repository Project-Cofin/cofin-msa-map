import axios from "axios"
const SERVER = 'http://127.0.0.1:8000'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege..'
}

const world = () => axios.get(`${SERVER}/api/map/world`)
const medPoint = x => axios.get(`${SERVER}/api/map/med-point/${x}`)
const medPoints = x => axios.post(`${SERVER}/api/map/med-points`, JSON.stringify(x), {headers})
const cases = x => axios.post(`${SERVER}/api/map/cases`, JSON.stringify(x), {headers})

export default {
  world,
  medPoint,
  medPoints,
  cases,
}