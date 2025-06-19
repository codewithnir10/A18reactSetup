import { useState } from 'react'

const MyUI =()=>{
  
  const [shoes,setShoes]=useState("shirt");
  const[clothes,setClothes]=useState("shirt");
  
  const changeClothes=()=>{
    setClothes("Pants");
  }
  const changeShoes=()=>{
    setShoes("Nike");
  }
   return(
    <div>
    {clothes}
    <button onClick={changeClothes}>Change clothes</button>
    {shoes}
    <button onClick={changeShoes}>Change Shoes</button>
    
    <p> i am react </p>
    </div>
  ) ;
};