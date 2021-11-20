import logo from "./logo.svg";
import "./App.css";
import { useLocation, useNavigate } from "react-router";

export default function About() {
  const location = useLocation();
  console.log(location.state);
  const test = location.state.map((item, index) => {
    return (
      <div>
        <h1>{item.name}</h1>
        <h1>{item.from}</h1>
        <h1>{item.age}</h1>
      </div>
    );
  });

  return (
    <div>
      <h1>this is about page</h1>
      {test}
    </div>
  );
}
