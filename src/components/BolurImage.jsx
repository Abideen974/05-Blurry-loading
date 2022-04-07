import React,{useState, useEffect} from 'react';
import './bolur.css';

function BolurImage() {
  
    let [bolur,setBolur] = useState(0);
  
    useEffect(()=>{
      const blurring = () => {
        bolur++;
        setBolur(bolur);
        if(bolur > 99){
          clearInterval(stop);
        }
       
      }
        let stop = setInterval(blurring,30);
    },[])
   
  const scale = (num,in_min,in_max,out_min,out_max)=>{
    return (num - in_min) * (out_max - out_min) / (in_max-in_min) + out_min;
  }
  return (
    <>
        <section className="bg" style={{ filter:` blur(${scale(bolur,0,100,30,0)}px)`}}></section>
   <div className="loading-text" style={{opacity:`${scale(bolur,0,100,1,0)}`}}>{`${bolur}%`}</div>
    </>
  )
}

export default BolurImage