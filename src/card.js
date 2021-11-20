import logo from "./logo.svg";
import "./App.css";
import react from "react";
import { Grid, Typography } from "@mui/material";

export default function Card(props) {
  const { data } = props;
  return (
      <div className="card">
        <h1>{data.id}</h1>
        <h1>{data.state}</h1>
        <h1>{data.positive}</h1>
      </div>
  );
}
