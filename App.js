"use strict";

import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.getadviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You have read {} advices so far</p>
    </div>
  );
}
