import ChatBot from "react-simple-chatbot";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

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
            id: "q-name",
            message: "What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "q-age",
          },
          {
            id: "q-age",
            message: "How old are you??",
            trigger: "age",
          },
          {
            id: "age",
            user: true,
            trigger: "q-job",
          },
          {
            id: "q-job",
            message: "Finally. what is you job?",
            trigger: "job",
          },
          {
            id: "job",
            user: true,
            trigger: "q-submit",
          },
          {
            id: "q-submit",
            message: "Do you wish to submit?",
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
            end: true,
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
    const { submit, name, age, job } = steps;

    this.state = { submit, name, age, job };
  }

  componentDidMount() {
    const userObject = {
      submit: this.state.submit.value,
      name: this.state.name.value,
      age: this.state.age.value,
      job: this.state.job.value,
    };
    alert(`data: ${JSON.stringify(userObject)}`);
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
        <div>Thank you! Your data was submitted successfully!</div>
      </>
    );
  }
}
