import React from 'react'

const Input = ({saamanThap, setMyProduct}) => {
  return (
    <div>
      <div style={{display:"flex"}}>
              <input type="text" onChange={(e)=>setMyProduct(e.target.value)}/>
              <button 
              onClick={()=>{
                if(mailelekhekoproduct!==""){
                saamanThap([...products,
                {id:new Date().getTime(),name:mailelekhekoproduct,price:200},
          
              ]);
            }
              }}
              >Add this product</button>
            </div>
    </div>
  )
}

export default Input;
