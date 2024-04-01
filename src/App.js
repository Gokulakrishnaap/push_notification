import "./App.css";
import { useEffect } from "react";
import { generateToken, messaging } from "./notification/firebase";
import { onMessage } from "firebase/messaging";

function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log("Payload..", payload);
    });
  }, []);

  return (
    <div className="App">
      <h2>Push Notification - FCM</h2>
    </div>
  );
}

export default App;
