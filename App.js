import { useState } from "react";

export default function App() {
  const [advice, setState] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.getadviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
  }

  return (
    <div>
      <h1>Hello I'm Learning React.js!</h1>
      <button>Get Advice</button>
    </div>
  );
}
