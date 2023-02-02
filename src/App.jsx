import { useState } from "react";
import { CharacterList } from "./components/CharacterList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-character">
      <h1 className="title">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
