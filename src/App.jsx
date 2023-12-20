import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          padding: "10px",
        }}
      >
        Open Card
      </button>
      {isOpen && <Card setIsOpen={setIsOpen} />}
    </main>
  );
}

export default App;
