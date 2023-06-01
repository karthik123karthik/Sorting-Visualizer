import styles from "../styles/Home.module.css";
import {useEffect, useState} from "react";

const barStyle = {
 "margin":"0.5px"
}


export default function Main({array,speed}) { 
  const [width,setWidth] = useState(0.5);

  
  useEffect(()=>{
    if(speed == 0) setWidth(2);
    else if(speed == 25) setWidth(1);
    else if(speed == 50) setWidth(0.5);
    else if(speed == 75) setWidth(0.25);
    else setWidth(0.125);
  },[]);


  function renderArray(){
    return (
      array.map((ele,idx)=> <div key={idx}  className="bar" style={{...barStyle,"height":`${ele}px`,"width":`${width}em`,"backgroundColor":"red"}}>
      </div>)
    )
  }
   
return (
  <div className={styles.container}>
    <div className={styles.arrayContainer}>
      {renderArray()}
    </div>         
 </div>

)
}


