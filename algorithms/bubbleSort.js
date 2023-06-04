import {delay} from "../components/utilities";

export async function bubbleSort(){
    const temp = document.getElementsByClassName("bar");
     let j;
    for(let i=0;i<temp.length-1;i++){
        for( j=0;j<temp.length-i-1;j++){
            if(parseInt(temp[j].style.height)>parseInt(temp[j+1].style.height)){
                temp[j].style.backgroundColor = "blue";
                temp[j+1].style.backgroundColor = "blue";
                await delay(5);
                const temp1 = temp[j].style.height;
                temp[j].style.height = temp[j+1].style.height;
                temp[j+1].style.height = temp1;
                temp[j].style.backgroundColor = "red";
                temp[j+1].style.backgroundColor = "red";
            }
        }
        temp[j].style.backgroundColor = "green";
    }

    for(let i=0; i<temp.length; i++){
        temp[i].style.backgroundColor = "#005CC8";
        await delay(5);
      }

}