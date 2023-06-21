import { delay } from "../components/utilities";

export async function insertionSort() {
  let arr = document.getElementsByClassName("bar");

  for(let j=1; j<arr.length; j++){
      let val = arr[j].style.height;
      let i = j-1;
      while(i>=0 && parseInt(arr[i].style.height)>parseInt(val)){
        await delay(10)
        arr[i+1].style.height = arr[i].style.height;
        await delay(10)
        arr[i].style.height = 0
        await delay(20)
        arr[i+1].style.backgroundColor = "green";
        arr[i].style.backgroundColor = "green";
        i--;
      }


      arr[i+1].style.backgroundColor = "blue";
      arr[i+1].style.height = val
      arr[i+1].style.backgroundColor = "green";
      await delay(5)
    }

    for(let i=0; i<arr.length; i++){
      arr[i].style.backgroundColor = "white";
      await delay(5);
    }

    
  let container = document.getElementById("container");
  container.style.backgroundColor = "#1F2937";


  }
