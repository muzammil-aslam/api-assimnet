import logo from "./logo.svg";
import "./App.css";
import { useLocation, useNavigate } from "react-router";

export default function Home() {
  const history = useNavigate();

  function handleMove() {
    const arry = [
      {
        name: "ali",
        from: "karachi",
        age: 13,
      },
    ];
    history("/about", { state: arry });
  }
  return (
    <div>
      <h1>this is home page</h1>
      <button onClick={handleMove}>sdsadasda</button>
    </div>
  );
}
