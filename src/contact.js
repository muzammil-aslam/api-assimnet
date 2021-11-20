import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import { Grid } from "@mui/material";

export default function Contact(props) {
  const { myFun } = props;
  const [list, setlist] = useState([]);

  const getData = () => {
    const api = `https://api.covidtracking.com/v1/states/current.json`;
    axios.get(api).then((res) => {
      setlist(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Grid container>
        <Grid style={{textAlign:'center',marginTop:'10px'}} item md={12}>
          <select  name="" id="option">
            <option>sadasdasdsa</option>
          </select>
        </Grid>
        {list.map((item) => {
          return (
            <Grid item md={4}>
              {<Card data={item} />}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
