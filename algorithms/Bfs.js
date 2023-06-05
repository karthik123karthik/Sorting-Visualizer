
import { delay } from "../components/utilities/index";

export async function bfs(row, col, arr, setArray) {
    let visitedArray = arr.slice();
    let queue = [];

    queue.push([row, col]);
    visitedArray[row][col] = 1;
    while (queue.length > 0) {
      let n = queue.length;
      visitedArray = arr.slice();
      while (n--) {
        const [x, y] = queue.shift();

        if (visitedArray[x][y] === 2) {
          visitedArray = arr.slice();
          visitedArray[x][y] = 2;
          setArray([...visitedArray]);
          return;
        }

        if (x - 1 >= 0 && visitedArray[x - 1][y] !== 1) {
          queue.push([x - 1, y]);
          if(visitedArray[x - 1][y] === 0) visitedArray[x - 1][y] = 1;
        }

        if (x + 1 < 18 && visitedArray[x + 1][y] !== 1) {
          queue.push([x + 1, y]);
          if(visitedArray[x + 1][y] === 0) visitedArray[x + 1][y] = 1;
        }

        if (y - 1 >= 0 && visitedArray[x][y - 1] !== 1) {
          queue.push([x, y - 1]);
          if(visitedArray[x][y - 1] === 0) visitedArray[x][y - 1] = 1;
        }

        if (y + 1 < 37 && visitedArray[x][y + 1] !== 1) {
          queue.push([x, y + 1]);
          if(visitedArray[x][y+1] === 0) visitedArray[x][y + 1] = 1;
        }
      }

      await delay(100);
      setArray([...visitedArray]);
      await delay(100);
    }
  }