import { useState } from "react";
import "./App.css";
import back from "./assets/back.svg";
import Header from "./components/Header";
// import Form1 from "./components/Form1";
import Form from "./components/Form";
import Form1 from "./components/Form1";

function App() {
  const [idx, setIdx] = useState(0);

  const renderForm = () => {
    switch (idx) {
      case 0:
        return <Form setIdx={setIdx} />;
      case 1:
        return <Form1 setIdx={setIdx} />;

      default:
        return <Form setIdx={setIdx} />;
    }
  };

  return (
    <div>
      <Header />
      {renderForm()}
    </div>
  );
}

export default App;
