import {delay} from "../components/utilities";

export async function mergeSort(){
    const temp = document.getElementsByClassName("bar");
    let low = 0;
    let high = temp.length-1;

    let container = document.getElementById('container');
     
   await  mergeSortAlgo(temp,low,high);

   for(let i=0; i<temp.length; i++){
    temp[i].style.backgroundColor = "white";
    await delay(5);
  }

  container.style.backgroundColor = '#1F2937';
   return;
}

async function mergeSortAlgo(array,low,high){

        if(low>=high) return;
        let mid = low + Math.floor((high-low)/2);
        await mergeSortAlgo(array,low,mid);
        await mergeSortAlgo(array,mid+1,high);
        await  merge(array,low,mid,high);
        return;
   
} 

async  function  merge(array,low,mid,high){
 let start = low;
 let start2= mid+1;

 if(parseInt(array[mid].style.height)<= parseInt(array[start2].style.height)) return; // already sorted condition

 while(start<=mid && start2<=high){
    if(parseInt(array[start].style.height)<= parseInt(array[start2].style.height)){
        array[start].style.backgroundColor = "blue";
        array[start2].style.backgroundColor = "blue";
       await delay(5);
       array[start].style.backgroundColor = "green";
       array[start2].style.backgroundColor = "red";
       start++;
    }
    else{
        array[start].style.backgroundColor = "blue";
        array[start2].style.backgroundColor = "blue";
        await delay(5);
        let value = array[start2].style.height;
        let start2temp = start2;
        let index = start2;
        while(index!=start){
            array[index].style.height = array[index-1].style.height;
            index--;
        }

        array[start].style.height = value;
        array[start].style.backgroundColor = "green";
        array[start2temp].style.backgroundColor = "red";
        start++;
        start2++;
        mid++;
    }
 }
 array[high].style.backgroundColor = "green";
 return;
}