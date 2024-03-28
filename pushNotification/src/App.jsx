import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { generateToken, messaging } from './config/firebase';
import { onMessage } from 'firebase/messaging';

function App() {
  const [count, setCount] = useState(0);

  const onMessageReceived = (message) => {
    toast(message.notification.body, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }; 

  const onSendNotification = async(token) => {
    const payload = {
      token: token,
      title: 'Hello World',
      body: 'This is a notification from DOTNET Firebase',
    };
    const response = await fetch('https://localhost:7059/send', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    } ,
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log('Success data', data);
  }

  useEffect(() => {
    generateToken()
    .then((token) => {
      if(token){
        console.log('targetDeviceToken', token);
        onSendNotification(token);
      }
    })
    .catch((err) => console.log('error', err));

    // When the app is open, we receive the message in onMessage Method
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      if(payload){
        onMessageReceived(payload);
      }
    });
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ToastContainer />
    </>
  )
}

export default App
