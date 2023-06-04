import { delay } from "../components/utilities";

export async function insertionSort() {
  const temp = document.getElementsByClassName("bar");
  
  for (let j = 1; j < temp.length; j++) {
    let i = j - 1;
    temp[j].style.backgroundColor = "green";
    const temp1 = temp[j].style.height;
    
    while (i >= 0 && parseInt(temp[i].style.height) > temp1) {
      temp[i].style.backgroundColor = "green";
      await delay(20);
      temp[i + 1].style.height = temp[i].style.height;
      temp[i].style.height = 0;
      await delay(20);
      i--;
    }
    
    if (i >= 0) {
      temp[i+1].style.height = temp1;
      temp[i+1].style.backgroundColor = "green";
    }

    await delay(5)
  }
}
