import React from 'react';
import './App.css';
import ButtNav from "./components/ButtNav";
// import Content from "./components/elements/Content"
// import NavBar from "./components/elements/NavBar"
import CommentInput from "./components/CommentItem/CommentInput"

function App() {
  return (
    <div className="App">
      <ButtNav/>
      <CommentInput/>
    </div>
  );
}

export default App;
