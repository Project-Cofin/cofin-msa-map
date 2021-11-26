import ChatBot from "react-simple-chatbot";
import React, { Component, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { answer, answerStatus, currentHealthState } from "../reducer/chatbotSlice";
import { func } from "prop-types";

export default function Chat() {
  return (
    <ThemeProvider
      theme={{
        background: "#f5f8fb",
        fontFamily: "Helvetica Neue",
        headerBgColor: "#EF6C00",
        headerFontColor: "#fff",
        headerFontSize: "15px",
        botBubbleColor: "#EF6C00",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4a4a4a",
      }}
    >
      <ChatBot
        steps={[
          {
            id: 'welcome',
            message: '안녕하세요~ 코핀 챗봇이에요 궁금한 사항이 있나요?',
            trigger: 'select',
          },
          { 
            id: "select", 
            options: [ 
              { value: "y", label: "백신 접종 자가 체크리스트", trigger: "askFever" }, 
              { value: "n", label: "질문하기", trigger: "question" }, 
            ], 
          }, 
          {
            id: 'question',
            message: '질문하실 말이 있나요?',
            trigger: 'userinput'
          },
          {
            id: 'userinput',
            user: true,
            trigger: 'askBot'
          },
          
          {
            id: 'dynamicallyReachedStep',
            message: 'This step was reached dynamically.',
            trigger: 'userinput'
          },
          {
            id: "askBot",
            component: <Ask />,
            asMessage: true,
            trigger: 'userinput'
          },
          {
            id: "checkBot",
            component: <CheckStatus />,
            asMessage: true,
            trigger: 'userinput'
          },
          {
            id: 'askFever',
            message: '현재 발열증상이 있나요?',
            trigger: 'fever'
          },
          {
            id: 'fever',
            options: [ 
              { value: "발열1", label: "38.4℃ 이하", trigger: "checkBot" }, 
              { value: "발열2", label: "38.5-38.9℃", trigger: "checkBot" }, 
              { value: "발열3", label: "39.0-40℃", trigger: "checkBot" }, 
              { value: "발열4", label: "40.1 도 이상", trigger: "checkBot" }, 
            ], 
          },
          {
            id: 'askPain',
            message: '접종 부위에 통증이 있나요?',
            trigger: 'pain'
          },
          {
            id: 'pain',
            options: [ 
              { value: "통증1", label: "통증은 있으나 약 먹을 정도는 아님", trigger: "checkBot" }, 
              { value: "통증2", label: "1~2일 약을 먹어야 팔을 움직이는데 지장이 없음", trigger: "checkBot" }, 
              { value: "통증3", label: "3일 이상 통증이 지속되거나 약을 먹어도 통증조절이 안되어 팔을 움직이기 어려운 경우", trigger: "checkBot" }, 
            ], 
          },
          // {
          //   id: '',
          //   message: '질문 내용이 {previousValue}(이)가 맞습니까?',
          //   trigger: ''
          // },
        ]}
        botAvatar={require("./data/icon.png").default}
        userAvatar={require("./data/user.png").default}
      />
    </ThemeProvider>
  );
};

export function Ask(props){
  const dispatch = useDispatch()
  const [ text, setText] = useState()
  console.log(props.steps)
  // if (props.steps.userinput == null){
    // console.log(props.steps.submit.value)
  // }else{
    // console.log(props.steps.userinput.value)
  // }
  useEffect(()=>{
    setText(props.steps.userinput.value)
    dispatch(answer(props.steps.userinput.value))
  },[text])
    return (
      <>
      <div>{text}이(가) 라고 질문하신 것이 맞습니까?</div>
      {text == "체크리스트" ? <button onClick={() => props.triggerNextStep({trigger: 'askFever'})} 
      style={{border:"0.5px", background:'burlywood', borderRadius: "9px", margin: "1em 2em 5px 2em", cursor: "pointer", boxShadow: "1px 1px 3px 1px #cbbab0"}} >
        백신 접종 증상 체크하기!
      </button>: <></>}
      {/* <div>이(가) 라고 질문하신 것이 맞습니까?</div> */}
      </>
    );
}


export function CheckStatus(props){
  
  const dispatch = useDispatch()
  const choice = useSelector((state)=>state.chatbot.healthState)
  // const text = choice
  // console.log(JSON.parse(JSON.stringify(choice)))
  useEffect(()=>{
    dispatch(answerStatus({'symptom': props.previousStep.value.slice(0, -1), 'details':props.previousStep.message}))
  },[])
    return (
      <>
      <div>{choice['answer']}</div>
      {/* <div>{} 을 선택하셨습니다.</div> */}
      <button style={{border:"0.5px", background:'burlywood', borderRadius: "9px", margin: "1em 2em 5px 2em", cursor: "pointer", boxShadow: "1px 1px 3px 1px #cbbab0"}} onClick={() => {props.triggerNextStep({trigger: 'askPain'})
    }}>
        이어서 진행하기
      </button>
      </>
    );
}