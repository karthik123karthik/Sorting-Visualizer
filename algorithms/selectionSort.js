import {delay} from "../components/utilities";

export  async function selectionSort(){ 
    const temp = document.getElementsByClassName("bar");
     for(let i=0;i<temp.length-1;i++){
       for(let j=i+1;j<temp.length;j++){
         if(parseInt(temp[i].style.height)>parseInt(temp[j].style.height)){
           temp[i].style.backgroundColor = "blue";
           temp[j].style.backgroundColor = "blue";
           await delay(5);
           const temp1 = temp[i].style.height;
           temp[i].style.height = temp[j].style.height;
           temp[j].style.height = temp1;
           temp[j].style.backgroundColor = "red";
           temp[i].style.backgroundColor = "red";
          }
          
        }
        temp[i].style.backgroundColor = "green";
     }

     temp[temp.length - 1].style.backgroundColor="green";
  }
