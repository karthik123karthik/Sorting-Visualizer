import { useState } from "react";
import Navbartwo from "../components/Navbar2";
import {bfs} from "../algorithms/Bfs";
import {dfs} from "../algorithms/Dfs";

function Paths() {
  const [arr, setArray] = useState(
    Array.from({ length: 18 }, () => Array(37).fill(0))
  );
  const [count, setCount] = useState(0);
  const [algo, setAlgo] = useState(-1);
  const [addBrick, setAddBrick] = useState(false);

  async function giveIndex(row, col) { 
    
    if(addBrick){
      let visited = arr.slice();
      visited[row][col] = 3;
      setArray([...visited]);
    }
    else {
      if (count === 0) {
      let visited = arr.slice();
      visited[row][col] = 2;
      setArray([...visited]);
      setCount((prev) => prev + 1);
    } else {
      console.log(algo);
      if(algo === 1) await dfs(row, col, arr,  setArray);
      if(algo === 2) await bfs(row, col, arr,  setArray)
      let visited = arr.slice();
      visited[row][col] = 2;
      setArray([...visited]);
    }
  }
}

  

  function getcolor(ele) {
    if (ele === 1) return "rgb(21 94 117)";
    else if (ele === 0) return "white";
    else if (ele == 2) return "#22D3EE";
    else{
      return "#964B00";
    }
  }

  return (
    <>
      <Navbartwo setArray={setArray} setCount={setCount} setAlgo = {setAlgo} setAddBrick={setAddBrick}/>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col mt-2 bg-cyan-400 gap-1 ">
          {arr.map((row, i) => (
            <div
              key={i}
              className=" flex flex-row itmes-center justify-around gap-1"
            >
              {row.map((ele, j) => (
                <div
                  key={j}
                  className="w-[30px] items-center text-center "
                  style={{ background: `${getcolor(ele)}` }}
                  onClick={() => giveIndex(i, j)}
                >
                  {ele}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Paths;
