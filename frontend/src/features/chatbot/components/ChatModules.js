import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { answer, answerStatus } from "../reducer/chatbotSlice"

export function Ask(props){
    const dispatch = useDispatch()
    const [ text, setText] = useState()
    console.log(props.steps)
    useEffect(()=>{
      setText(props.steps.userinput.value)
      dispatch(answer(props.steps.userinput.value))
    },[text])
      return (
        <>
        <div>{text}이(가) 라고 질문하신 것이 맞습니까?</div>
        {text == "체크리스트" ? <button onClick={() => props.triggerNextStep({trigger: 'fever'})} 
        style={{border:"0.5px", background:'burlywood', borderRadius: "9px", margin: "1em 2em 5px 2em", cursor: "pointer", boxShadow: "1px 1px 3px 1px #cbbab0"}} >
          백신 접종 증상 체크하기!
        </button>: <></>}
        </>
      );
  }
  
  
  export function CheckStatus(props){
    const dispatch = useDispatch()
    const pain_arr = ['fever', 'ino_area', 'swell', 'sick', 'pain', 'fatigue', 'allergy', 'etc', 'welcome']
    const symptom = props.previousStep.value.slice(0, -1)
    const choice = useSelector((state)=>state.chatbot.healthStates[symptom])
    useEffect(()=>{
      dispatch(answerStatus({'symptom': symptom, 'details':props.previousStep.message}))
    },[])
      return (
        <>
        <div>{choice['answer']}</div>
        <button style={{border:"0.5px", background:'burlywood', borderRadius: "9px", margin: "0.7em auto", 
                        cursor: "pointer", boxShadow: "1px 1px 3px 1px #cbbab0", width: "10em", display: "block"}} 
                onClick={() => {
                  try {
                    if(props.previousStep.value.slice(-1)>2){
                      window.localStorage.setItem("counter", localStorage.getItem("counter")+1)
                    }
                    props.triggerNextStep({trigger: pain_arr[pain_arr.indexOf(symptom)+1]})
                  } catch (error) {
                  }
                }}>
          이어서 진행하기
        </button>
        <button style={{border:"0.5px", background:'burlywood', borderRadius: "9px", margin: "0.5em auto", 
                        cursor: "pointer", boxShadow: "1px 1px 3px 1px #cbbab0", width: "10em", display: "block"}} 
                onClick={() => {
                  if(props.previousStep.value.slice(-1)>2){
                    window.localStorage.setItem("counter", parseInt(localStorage.getItem("counter"))+1)
                  }
                  props.triggerNextStep({trigger: 'alert'})
                }}>
          그만하기
        </button>
        </>
      );
  }
  
  export function AlertMessage(){
    return(<>
    {
      localStorage.getItem("counter") == 0
      ? <div>주요 이상 반응이 없습니다.</div>
      : <div>주요 이상 반응이 '{localStorage.getItem("counter")}' 건 있습니다. 가까운 의료기관에 방문하시기를 추천드립니다.</div>
    }
    </>)
  }
  
  export function ResetMessage(){
    localStorage.setItem("counter", 0)
    return(<>
      <div>
        또 다른 궁금하신 부분이 있나요?
      </div>
    </>)
  }