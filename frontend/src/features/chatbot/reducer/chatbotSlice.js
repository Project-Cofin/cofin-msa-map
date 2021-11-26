import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { chatbotAPI } from "..";

const ANSWER = async (x) => {
  //  const res = await chatbotAPI.findAnswer(x)
  console.log(`넘겨받은 페이로드: ${x}`)
  //  const res = await x
  //  return res.data
}
const STATUS = async (x) => {
  const res = await chatbotAPI.statusAnswer(x)
  return res.data
}
const INITSTATUS = async() => {
  const res = await chatbotAPI.getStatus()
  return res.data
}


export const answer = createAsyncThunk('/chat', ANSWER)
export const answerStatus = createAsyncThunk('/status', STATUS)
export const initStatus = createAsyncThunk('/initStatus', INITSTATUS)

const chatbotSlice = createSlice({
  name: 'bot',
  initialState: {
    botState: {
      answer: ''
    },
    botsState: [],
    // healthState:{
    //   symptom: '', details: '', level: '', answer: ''
    // },
    healthStates:{},
    type: '',
    keyword: '',
    params: {}
  },
  reducers: {},
  extraReducers: {
    [answer.fulfilled]: ( state, action ) => { 
      state.botState = action.payload
    },
    [answerStatus.fulfilled]: ( state, action ) => { 
      state.healthStates = {...state.healthStates, [action.payload.symptom]:action.payload}
    },
    [initStatus.fulfilled]: ( state, action) => {
      window.localStorage.setItem('counter', 0)
      action.payload.forEach(element => {
        state.healthStates = {...state.healthStates, [element['symptom']]:action.payload}
      });
      
    }
  }

})
export const currentBotState = state => state.bot.botState
export const currentBotsState = state => state.bot.botsState
export const currentHealthState = state => state.bot.healthState
// export const currentBotParam = state => state.bot.param
export default chatbotSlice.reducer;
