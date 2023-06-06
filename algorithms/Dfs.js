import { delay } from "../components/utilities/index";

export async function dfs(row, col, visited, setArray) {
    if (row >= 18 || row < 0 || col >= 37 || col < 0 || visited[row][col] === 1 || visited[row][col] === 3)
      return false;
    else if (visited[row][col] === 2) {
      let temp = visited.slice();
      temp[row][col] = 2;
      await delay(100);
      setArray([...temp]);
      return true;
    }

      let temp = visited.slice();
      temp[row][col] = 1;
      await delay(10);
      setArray([...temp]);
      await delay(10);
    let value = false;
    value = value || (await dfs(row + 1, col, visited, setArray));
    if (value) return value;
    value = value || (await dfs(row, col - 1, visited, setArray));
    if (value) return value;
    value = value || (await dfs(row - 1, col, visited, setArray));
    if (value) return value;
    value = value || (await dfs(row, col + 1, visited, setArray));
    return value;
  }
