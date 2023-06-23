import { useState } from "react";
import "./index.css";
import Modal from "./components/Modal";

function App() {
  const [status, setStatus] = useState(true);

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <div className={status ? "show overlay" : "noShow"}></div>
      <Modal status={status} />
      <Modal status={status} />
    </div>
  );
}

export default App;
