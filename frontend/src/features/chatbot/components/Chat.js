import ChatBot from "react-simple-chatbot";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";

const Chat = () => {
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

export default Chat;

export class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { userinput } = steps;

    // this.state = { submit, name, hobby };
  }

  componentDidMount() {
    const userObject = {
      submit: this.state.submit.value,
      name: this.state.name.value,
      hoby: this.state.hobby.value,
    };
    console.log(`data: ${JSON.stringify(userObject)}`);
    // axios.post(`/api`, userObject)
    // .then(res => {
    //     console.log(res.status)
    // }).catch(function(error) {
    //     console.log(error);
    // });
  }

  render() {
    return (
      <>
        <div>Thank you! I'll remember you.</div>
      </>
    );
  }
}
