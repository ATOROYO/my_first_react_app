export default function App() {
  async function getAdvice() {
    const res = await fetch("https://api.getadviceslip.com/advice");
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Hello I'm Learning React.js!</h1>
      <button>Get Advice</button>
    </div>
  );
}
