import { useState} from 'react'
import {Chatbot} from 'supersimpledev'
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
import './App.css'     
//app conponent
      function App(){
        const [chatMessages,setChatMessages] = useState(
          [{
          message:'HEllow',
          sender:'user',
          id:'1'
        },{
          message:'HWt',
          sender:'bot',
          id:'2'
        },{
          message:'nth',
          sender:'user',
          id:'3'
        },{
          message:'lol',
          sender:'bot',
          id:'4'
        }]
        );
        //const [chatMessages,setChatMessages] = array;
        //const chatMessages = array[0];
        //const setChatMessages = array[1];
        return(
          <div className="main">
            <ChatMessages chatMessages={chatMessages}/>
            <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
          </div>
        );
      }

export default App
