import React from "react";
import game from "./logic/index";
import Grid from "./components/grid";
import "./App.css";

const App = () => {
  let games = [game[0][0], game[0][1]];
  game.shift();
  games = [...games, ...game];

  return (
    <div className="container">
      <Grid game={games}></Grid>
    </div>
  );
};

export default App;
