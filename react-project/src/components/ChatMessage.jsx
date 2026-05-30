
import botImage from '../assets/robot.png';
import userImage from '../assets/user.png';
import './ChatMessage.css';
 //chat message component
     export function ChatMessage({message,sender}){
        // shortcut for veribale 
        //const {message, sender} = props;
        
        //removed beacuse of && shortcut
        /*
        if(sender === 'bot'){
          return (
          <div>
            <img src="resources/img/robot.png" width="50" />
            {message}
          </div>
        )
        }
        */
        return (
          // used && guard for img selection
          //replaced by ternary operator
          <div className={sender==='bot'?'message-bot':'message-user'}>
            {sender === 'bot' && <img src={botImage} className="message-profile" />}
            <div className="message-text">{message}</div>
            {sender === 'user' && <img src={userImage} className="message-profile" />}
          </div>
        )
      }