import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar  from "../components/Navbar";
import { useState } from "react";
import Main from "../components/Main";

const Home = ()=>{
    const [array,setArray] = useState([]);
    const [speed,setSpeed] = useState(0);    
    
    function generateRandomArray(){
        const low =  Math.floor(100);
        const high = Math.floor(350);
        const newArray=[];
        for(let i=0;i<speed+50;i++){
          let generated  = Math.floor(Math.random()*(high-low) + low);
          newArray.push(generated);
        }
       setArray(newArray);
       const temp = document.getElementsByClassName("bar")
       for(let i=0;i<temp.length;i++){
        temp[i].style.backgroundColor = "red";
       }
      }   
   
   return(
  <div className="h-max">
     <Head>
        <title>Sorting Visualizer</title>
        <meta name="project-placements" contents="algorithm-visualizer"></meta>
        <link rel="favicon" href="./favicon.ico"/>
      </Head>
       <Navbar setSpeed={setSpeed} generateRandomArray={generateRandomArray}/>
        <div className={styles.container}>
            <main className={styles.main}>
                <Main speed={speed} array={array}/>
            </main>
        </div>
    </div>
    )

}

export default Home;