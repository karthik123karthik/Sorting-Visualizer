import { useState } from 'react';
import { delay } from '../components/utilities';


function paths() {

  const [arr, setArray] = useState(Array.from({ length: 15 }, () => Array(20).fill(0)));

  function giveIndex(row, col){
       callvisited();
  }

  async function callvisited(){
      let visitedArray = arr.slice();
      let queue = [];

      queue.push([6,6]);

      while(queue.length > 0){
         const [x, y] = queue.shift();
         visitedArray[x][y] = 1;
         await delay(2);
         setArray([...visitedArray]);

         if(x-1 >=0  && visitedArray[x-1][y] == 0){
          queue.push([x-1, y]);
         }

         if(x+1 <15  && visitedArray[x+1][y] == 0){
          queue.push([x+1, y]);
         }

         if( y-1>=0 && visitedArray[x][y-1] == 0){
          queue.push([x, y-1]);
         }

         if(y+1<20   && visitedArray[x][y+1] == 0){
          queue.push([x, y+1]);
         }
      }
  }
   

  return (
    <div className='flex flex-row h-[600px] justify-center items-center'>
    <div className='flex flex-col gap-1 h-[80vh] w-[80vw]'>
    {arr.map((row, i) => < div key={i} className=' flex flex-row itmes-center justify-around gap-1'>{row.map((ele, j) => <div key={j} className='w-[100px] items-center text-center rounded' style={{"background":`${!ele? "red":"green"}`}} onClick={() => giveIndex(i, j)}>{ele}</div>)}</div>)}
    </div>
    </div>
  )
}

export default paths