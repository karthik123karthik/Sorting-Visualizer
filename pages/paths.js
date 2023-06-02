import { useState } from 'react';
import { delay } from '../components/utilities';
import Navbartwo from '../components/Navbar2';





function Paths() {

  const [arr, setArray] = useState(Array.from({ length: 18 }, () => Array(30).fill(0)));

  function giveIndex(row, col){
       dfs(row, col, arr);
  }

  async function dfs(row, col, visited){
   
    if(row >= 18 || row<0 || col>= 30 || col<0 || visited[row][col]!==0)return;

    
    if(row === 3 && col ===3 ){
      let temp = visited.slice();
      temp[row][col] = 2
      await delay(100);
      setArray([...temp])
      return;
    }
    
    let temp = visited.slice();
    temp[row][col] = 1
    await delay(10);
    setArray([...temp])
    await delay(10);
    let value = false
    await dfs(row+1, col, arr)
    await dfs(row, col+1, arr)
    await dfs(row-1, col, arr)
    await dfs(row, col-1, arr)

    temp = visited.slice();
    temp[row][col] = 1
    await delay(10);
    setArray([...temp])
    await delay(10);
    return;
  
  }

 

  async function callvisited(row, col){
      let visitedArray = arr.slice();
      let queue = [];

      queue.push([row, col]);
      visitedArray[row][col] = 2;
      while(queue.length > 0){          
        let n = queue.length;
        visitedArray = arr.slice()
        while(n--){
         const [x, y] = queue.shift();

         if(x== 3 && y == 3){
          visitedArray = arr.slice()
          visitedArray[x][y] = 2;
          setArray([...visitedArray]);
          return;
         }

         if(x-1 >=0  && visitedArray[x-1][y] == 0){
          queue.push([x-1, y]);
          visitedArray[x-1][y] = 1
         }

         if(x+1 <18  && visitedArray[x+1][y] == 0){
          queue.push([x+1, y]);
          visitedArray[x+1][y] = 1
         }

         if( y-1>=0 && visitedArray[x][y-1] == 0){
          queue.push([x, y-1]);
          visitedArray[x][y-1] = 1
         }

         if(y+1<30   && visitedArray[x][y+1] == 0){
          queue.push([x, y+1]);
          visitedArray[x][y+1] = 1
         }
      }

      await delay(100);
      setArray([...visitedArray]);
      await delay(100)
    }
  }

  function getcolor(ele){
    if(ele === 1)return "rgb(21 94 117)";
    else if(ele === 0)return "white";
    else return "rgb(8 51 68)";
  }
   

  return (
    <>
      <Navbartwo setArray={setArray}/>
    <div className='flex flex-row justify-center items-center'>
    <div className='flex flex-col mt-2 bg-cyan-400 gap-1 w-[80vw]'>
    {arr.map((row, i) => < div key={i} className=' flex flex-row itmes-center justify-around gap-1'>{row.map((ele, j) => <div key={j} className='w-[100px] items-center text-center ' style={{"background":`${getcolor(ele)}`}} onClick={() => giveIndex(i, j)}>{ele}</div>)}</div>)}
    </div>
    </div>
    </>
  )
}

export default Paths