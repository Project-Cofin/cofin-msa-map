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
            id: 'q-name',
            message: 'What is your name??',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: 'a-name'
          },
          {
            id: 'a-name',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: 'q-hobby'
          },
          {
              id: 'q-hobby',
              message: 'What is your hobby?',
              trigger: 'hobby'
          },
          {
              id: 'hobby',
              user: true,
              trigger: 'a-hobby'
            },
          {
            id: 'a-hobby',
            message: "{previousValue}? That's cool!",
            trigger: 'q-submit'
          },
          {
            id: "q-submit",
            message: "Can I remember you?",
            trigger: "submit",
          },
          {
            id: "submit",
            options: [
              { value: "y", label: "Yes", trigger: "end-message" },
              { value: "n", label: "No", trigger: "no-submit" },
            ],
          },
          {
            id: "no-submit",
            message: "Your information was not submitted.",
            end: true,
          },
          {
            id: "end-message",
            component: <Post />,
            asMessage: true,
            trigger: 'q-re-start'
          },
          {
            id: 'q-re-start',
            message: "Do you want to do it again?",
            trigger: 're-start'
          },
          {
            id: 're-start',
            options: [
              { value: 'y', label: "Yes", trigger: "q-name" },
              { value: 'n', label: "No", trigger: "stop" },
            ],
          },
          {
            id: 'stop',
            message: 'Ok! bye~',
            end: true
          }
        ]}
        botAvatar={require("./data/icon.png").default}
        userAvatar={require("./data/user.png").default}
      />
    </ThemeProvider>
  );
};

export default Chat;

// export function Post(props) {
//     const { steps } = props;
//     const { submit, name, hobby } = steps;
//     const state = { submit, name, hobby };
//     // const keys = Object.getOwnPropertyNames(state)
//     // console.log(keys)
//     const userObject = {
//       submit: state.submit.value,
//       name: state.name.value,
//       hoby: state.hobby.value,
//     };
//     console.log(`data: ${JSON.stringify(userObject)}`)
//     return (
//       <>
//         <div>Thank you! I'll remember you.</div>
//       </>
//     );
// }


export class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { submit, name, hobby } = steps;

    this.state = { submit, name, hobby };
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
