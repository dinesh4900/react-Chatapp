import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';


import './App.css';

const App =() =>{
  return(
    <ChatEngine 
      height="100vh"
      projectID="37378e98-367e-4593-86c9-476ea5c6cc64"
      userName="dinesh"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
       />
  );
}

export default App;
