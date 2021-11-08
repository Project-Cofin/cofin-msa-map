import React from "react";
import Chatbot from "react-chatbot-kit";
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
    }
  }
  
  // ActionProvider starter code
  class ActionProvider {
     constructor(
      createChatBotMessage,
      setStateFunc,
      createClientMessage,
      stateRef,
      createCustomMessage,
      ...rest
    ) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.stateRef = stateRef;
      this.createCustomMessage = createCustomMessage;
    }
  }
  

export default function Chat2() {
    const config = {
        initialMessages: [createChatBotMessage(`Hello world`)]
      }
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}