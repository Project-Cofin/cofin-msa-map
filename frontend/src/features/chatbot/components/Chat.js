import React, { useRef, useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  SendButton,
  AttachmentButton,
} from "@chatscope/chat-ui-kit-react";

export default function Local() {
  const inputRef = useRef();
  const [msgInputValue, setMsgInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([
      ...messages,
      {
        message,
        direction: "outgoing",
      },
    ]);
    setMsgInputValue("");
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        height: "500px",
      }}
    >
      <ChatContainer>
        <ConversationHeader>
          <ConversationHeader.Content userName="Zoe" info="Beautiful day" />
          <ConversationHeader.Actions>
            <VoiceCallButton />
            <VideoCallButton />
            <InfoButton />
          </ConversationHeader.Actions>
        </ConversationHeader>

        <MessageList>
          {messages.map((m, i) => (
            <Message key={i} model={m} />
          ))}
        </MessageList>

        <div
          as={MessageInput}
          style={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px dashed #d1dbe4",
          }}
        >
          <MessageInput
            ref={inputRef}
            onChange={(msg) => setMsgInputValue(msg)}
            value={msgInputValue}
            sendButton={false}
            attachButton={false}
            onSend={handleSend}
            style={{
              flexGrow: 1,
              borderTop: 0,
              flexShrink: "initial",
            }}
          />
          <SendButton
            onClick={() => handleSend(msgInputValue)}
            disabled={msgInputValue.length === 0}
            style={{
              fontSize: "1.2em",
              marginLeft: 0,
              paddingLeft: "0.2em",
              paddingRight: "0.2em",
            }}
          />
          <AttachmentButton
            style={{
              fontSize: "1.2em",
              paddingLeft: "0.2em",
              paddingRight: "0.2em",
            }}
          />
          <InfoButton
            onClick={() => alert("Important message!")}
            style={{
              fontSize: "1.2em",
              paddingLeft: "0.2em",
              paddingRight: "0.2em",
            }}
          />
        </div>
      </ChatContainer>
    </div>
  );
}








