import './App.css';

import { Todo } from "./components/TodoInput";

function App() {
  return (
    <div className="App">
      <Todo />
      <div id = "Todolist" style={{
        border: "1px solid",
        width: "50%",

        margin: "auto",
        marginTop : "2vw",
      }}></div>
    </div>
  );
}

export default App;