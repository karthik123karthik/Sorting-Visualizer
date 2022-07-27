import {delay} from "../components/utilities";

 export async function quickSort(){
   const temp = document.getElementsByClassName("bar");
   await quickSortHelper(temp,0,temp.length-1);
   return;
}


async function quickSortHelper(array,low,high){
    if(low>high) return;

    let pivot = await getPivot(array,low,high);
    await quickSortHelper(array,low,pivot-1);
    await quickSortHelper(array,pivot+1,high);
    return;    
}


async function getPivot(array,low,high){
    let pivotele = array[high];
    let i=low-1;
    let j=-1;
    
    for(j=low;j<=high;j++){
        if(parseInt(array[j].style.height)<parseInt(pivotele.style.height)){
            i++;
            array[j].style.backgroundColor = "blue";
            array[i].style.backgroundColor = "blue";
                await delay(20);
                const temp1 =array[i].style.height;
               array[i].style.height =array[j].style.height;
                array[j].style.height = temp1;
               array[j].style.backgroundColor = "red";
               array[i].style.backgroundColor = "red";
        }
    }
  i++;
    pivotele.style.backgroundColor = "blue";
    array[i].style.backgroundColor = "blue";
        await delay(20);
        const temp1 =array[i].style.height;
       array[i].style.height =pivotele.style.height;
       pivotele.style.height = temp1;      
       array[i].style.backgroundColor = "green";

 return i;    
}