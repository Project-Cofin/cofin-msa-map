import ChatBot from "react-simple-chatbot";
import React, { Component, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { answer } from "../reducer/chatbotSlice";
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
            message: '안녕하세요~ 코핀 챗봇이에요 궁금한 사항을 물어봐주세요',
            trigger: 'userinput',
          },
          {
            id: 'userinput',
            user: true,
            trigger: 'bot-response'
          },
          // {
          //   id: 'bot-response',
          //   message: '질문 내용이 {previousValue}(이)가 맞습니까?',
          //   trigger: 'user-input'
          // },
          
          {
            id: "bot-response",
            component: <Post />,
            asMessage: true,
            trigger: 'userinput'
          },
          
        ]}
        botAvatar={require("./data/icon.png").default}
        userAvatar={require("./data/user.png").default}
      />
    </ThemeProvider>
  );
};

export function Post(props){
  const dispatch = useDispatch()
  const [ text, setText] = useState()
  useEffect(()=>{
    setText(props.steps.userinput.value)
    dispatch(answer(props.steps.userinput.value))
  },[text])
    return (
      <>
      <div>{text}이(가) 라고 물어보신 것이 맞습니까?</div>
      </>
    );
}
