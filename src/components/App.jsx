import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import './App.css';
import { Accordion, AnimationWrapper } from 'chayns-components';


// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};




const app = initializeApp(firebaseConfig);
const databaseReference = ref(getDatabase(app), 'messages');

const App = () => {
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojis = ["👋", "✌️", "🤞", "🤟", "🤘", "🤙", "🖖", "🤜", "🤚", "✋", "🖐", "👐", "🤲", "👌", "🤏", "🤳", "👈", "👉", "👆", "👇", "☝️", "✊", "🤛", "🤜", "🤌"];

 useEffect(() => {
    const handleDataChange = (snapshot) => {
      if (snapshot.exists()) {
        setChatMessages(Object.values(snapshot.val()));
      }
    };

    onValue(databaseReference, handleDataChange);

    return () => {};

  }, []);

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      push(databaseReference, 'React: ' + inputText);
      setInputText('');
    }
  };


  const handleClearChat = () => {
    set(databaseReference, null);
    window.location.reload();
  };

  const handleEmojiClick = (emoji) => {
    setInputText(inputText + emoji);
    // We won't hide the emoji picker after selecting an emoji
  };

  return (
    <div className="app-container">
      <h1>Klicken Sie auf "Chat mit Support" um das Chatten zu starteng!</h1>
      <AnimationWrapper animationName="slideInFromBottom">
        <Accordion head="Chat mit dem Support">
        <div className="input-container">
            <input
                type="text"
                value={inputText}
                onChange={event => setInputText(event.target.value)}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        handleSendMessage();
                    }
                }}
                placeholder="Type your message here..."
            />
            <button onClick={handleSendMessage}>Send</button>
            <button onClick={handleClearChat}>Clear Chat</button>
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</button>
            {showEmojiPicker && (
                <div className="emoji-picker">
                    {emojis.map((emoji, index) => (
                        <span key={index} onClick={() => handleEmojiClick(emoji)}>
                            {emoji}
                        </span>
                    ))}
                </div>
            )}
        </div>
        <div className="chat-container">
            {chatMessages.map((message, index) => (
                <div
                    key={index}
                    className={message.startsWith('React: ') ? 'message message-right' : 'message message-left'}
                >
                    {message.replace('React: ', '').replace('Kotlin: ', '')}
                </div>
            ))}
        </div>
     </Accordion>
      </AnimationWrapper>
    </div>
  );
};

export default App;