import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar  from "../components/Navbar";
import { useState } from "react";
import Main from "../components/Main";

const Home = ()=>{
    const [array,setArray] = useState([]);
    const [speed,setSpeed] = useState(0);    
    
    function generateRandomArray(){
        const low =  100;
        const high = 350;
        const newArray=[];
        for(let i=0;i<speed+50;i++){
         //generating a random number between low and high
          let element = Math.floor(Math.random()*(high-low) + low);
          newArray.push(element);
        }
       setArray(newArray);
       const temp = document.getElementsByClassName("bar")
       for(let i=0;i<temp.length;i++){
        temp[i].style.backgroundColor = "red";
       }

       let container = document.getElementById('container');
       container.style.backgroundColor = 'black';
      }   
   
   return(
  <div>
     <Head>
        <title>Sorting Visualizer</title>
        <meta name="project-placements" contents="algorithm-visualizer"></meta>
        <link rel="favicon" href="./favicon.ico"/>
      </Head>
       <Navbar setSpeed={setSpeed} generateRandomArray={generateRandomArray}/>
        <div className={styles.container} id='container' style={{'backgroundColor':"black"}}>
            <main className={styles.main}>
                <Main speed={speed} array={array}/>
            </main>
        </div>
    </div>
    )

}

export default Home;
