import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { HomeIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center gap-2">
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
        <div className="flex gap-2">
          <Button>Click me!</Button>
          <Button variant="destructive" size="icon">
            <HomeIcon className="h-4 w-4" />
          </Button>
          <Button>
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
