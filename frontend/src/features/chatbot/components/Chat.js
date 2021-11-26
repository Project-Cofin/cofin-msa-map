import ChatBot from "react-simple-chatbot";
import React from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { initStatus } from "../reducer/chatbotSlice";
import { AlertMessage, Ask, CheckStatus, ResetMessage } from "./ChatModules";

export default function Chat() {
  const dispatch = useDispatch()
  dispatch(initStatus())
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
              { value: "y", label: "백신 접종 자가 체크리스트", trigger: "fever" }, 
              { value: "n", label: "질문하기", trigger: "question" }, 
            ], 
          }, 
          {
            id: 'question',
            message: '질문하실 말이 있나요?',
            trigger: 'userinput'
          },
          {
            id: 're_quest',
            component: <ResetMessage />,
            asMessage: true,
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
            id: 'fever',
            message: '현재 발열증상이 있나요?',
            trigger: 'select_fever'
          },
          {
            id: 'select_fever',
            options: [ 
              { value: "fever1", label: "38.4℃ 이하", trigger: "checkBot" }, 
              { value: "fever2", label: "38.5-38.9℃", trigger: "checkBot" }, 
              { value: "fever3", label: "39.0-40℃", trigger: "checkBot" }, 
              { value: "fever4", label: "40.1℃ 이상", trigger: "checkBot" }, 
              { value: "0", label: "해당 없음", trigger: "ino_area" }, 
            ], 
          },
          {
            id: 'ino_area',
            message: '접종 부위에 통증이 있나요?',
            trigger: 'select_ino_area'
          },
          {
            id: 'select_ino_area',
            options: [ 
              { value: "ino_area1", label: "통증은 있으나 약 먹을 정도는 아님", trigger: "checkBot" }, 
              { value: "ino_area2", label: "1~2일 약을 먹어야 팔을 움직이는데 지장이 없음", trigger: "checkBot" }, 
              { value: "ino_area3", label: "3일 이상 통증이 지속되거나 약을 먹어도 통증조절이 안되어 팔을 움직이기 어려운 경우", trigger: "checkBot" }, 
              { value: "0", label: "해당 없음", trigger: "swell" }, 
            ], 
          },
          {
            id: 'swell',
            message: '접종부위에 부어오름 증상이 있나요?',
            trigger: 'select_swell'
          },
          {
            id: 'select_swell',
            options: [ 
              { value: "swell1", label: "직경 5cm 이하", trigger: "checkBot" }, 
              { value: "swell2", label: "5.1~10cm 움직이기 불편", trigger: "checkBot" }, 
              { value: "swell3", label: "10cm 이상 활동 어려움", trigger: "checkBot" }, 
              { value: "swell4", label: "농양", trigger: "checkBot" }, 
              { value: "0", label: "해당 없음", trigger: "sick" }, 
            ], 
          },
          {
            id: 'sick',
            message: '구토감 또는 매스꺼움 증상이 있나요?',
            trigger: 'select_sick'
          },
          {
            id: 'select_sick',
            options: [ 
              { value: "sick1", label: "일상생활이 불편한 정도는 아님", trigger: "checkBot" }, 
              { value: "sick2", label: "하루(24시간)에 1~2회 발생", trigger: "checkBot" }, 
              { value: "sick3", label: "하루(24시간)에 3회 이상 발생", trigger: "checkBot" }, 
              { value: "0", label: "해당 없음", trigger: "pain" }, 
            ], 
          },
          {
            id: 'pain',
            message: '통증이 있나요?',
            trigger: 'select_pain'
          },
          {
            id: 'select_pain',
            options: [ 
              { value: "pain3", label: "두통", trigger: "checkBot" }, 
              { value: "pain4", label: "관절통", trigger: "checkBot" }, 
              { value: "pain5", label: "근육통", trigger: "checkBot" }, 
              { value: "0", label: "해당 없음", trigger: "fatigue" }, 
            ], 
          },
          {
            id: 'fatigue',
            message: '피로감이 증상이 있나요?',
            trigger: 'select_fatigue'
          },
          {
            id: 'select_fatigue',
            options: [ 
              { value: "fatigue1", label: "피로감 증상 있음", trigger: "checkBot" }, 
              { value: "0", label: "해당 없음", trigger: "allergy" }, 
            ], 
          },
          {
            id: 'allergy',
            message: '알레르기 증상이 있나요?',
            trigger: 'select_allergy'
          },
          {
            id: 'select_allergy',
            options: [ 
              { value: "allergy3", label: "발진", trigger: "checkBot" }, 
              { value: "allergy4", label: "두드러기", trigger: "checkBot" }, 
              { value: "allergy5", label: "소양감(가려움증)", trigger: "checkBot" }, 
              { value: "allergy6", label: "부기(얼굴/입술)", trigger: "checkBot" }, 
              { value: "0", label: "해당 없음", trigger: "etc" }, 
            ], 
          },
          {
            id: 'etc',
            message: '기타 이상 반응이 있나요?',
            trigger: 'select_etc'
          },
          {
            id: 'select_etc',
            options: [ 
              { value: "etc3", label: "기타 이상 반응", trigger: "checkBot" }, 
              { value: "0", label: "해당 없음", trigger: "re_quest" }, 
            ], 
          },
          {
            id: 'alert',
            component: <AlertMessage />,
            asMessage: true,
            trigger: 're_quest'
          }
        ]}
        botAvatar={require("./data/icon.png").default}
        userAvatar={require("./data/user.png").default}
      />
    </ThemeProvider>
  );
};
