import React, { useState, useEffect } from "react";
import "./grid.css";

interface Props {
  game: any;
}

const Grid = ({ game }: Props) => {
  const [current, setCurrent] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= game.length) {
        clearInterval(interval);
      } else {
        setCurrent(game[count]);
        setCount((count) => count + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [game, count]);

  let def = "";
  for (let i = 0; i < current.length; i++) {
    for (let j = 0; j < current.length; j++) {
      def += `<span class="grid-span${current[i][j] ? " active" : ""}"></span>`;
    }
    def += "<br/>";
  }

  return <div dangerouslySetInnerHTML={{ __html: def }}></div>;
};

export default Grid;
