import { useState} from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css';
export function ChatInput({chatMessages,setChatMessages}){
        const [inputText,setInputText] = useState('');
        function saveInputText(event){
          setInputText(event.target.value);
        }
        function sendMessgae(){
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender:'user',
              id: crypto.randomUUID()
            }
          ]
          setChatMessages(newChatMessages);

          const responce = Chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: responce,
              sender:'bot',
              id: crypto.randomUUID()
            }
          ]);
          setInputText('');
        }
        return (
          <div className="input-div">
            <input placeholder="Enter a message" size="40" onChange={saveInputText} value={inputText} className="chat-input"/>
            <button onClick={sendMessgae} className="send-button">Send</button>
          </div>
        );
}