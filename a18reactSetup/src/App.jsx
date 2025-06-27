import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Son from "./Son";
import Daughter from './Daughter';
import grandchild from './grandchild';
import MyUI from './pages/MyUI';
import Input from './pages/input/Input';
import Products from './pages/products/Products';

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//   <>This is react files.</>
    
//   )
// }

const App=()=>{
  // const clothes="shirt";
  // const shoes="sneakers";
  // const[clothes,setClothes]=useState("shirt")
  // const changeClothes=()=>{
  //   setClothes("Pants");
  // }
  // const changeShoes=()=>{
  //   setShoes("Nike");
  // }
  // const [shoes,setShoes]=useState("sneakers");
  const [products,setProducts]=useState([
    {id:1,name:"shirt",price:500},
    {id:2,name:"pants",price:600},
    {id:3,name:"shoes",price:700},
    {id:4,name:"watch",price:300},

  ]);
const[myProduct,setMyProduct]=useState("")
const DeleteProduct=(id)=>{
  setProducts(products.filter((product)=>
    product.id!==id
  ));

}

  return(
    <div>
      <Input saamanThap={setProducts}
      setMyProduct={setMyProduct}
      mailelekhekoproduct={myProduct}
      />
      
     <Products saaman={products}
     saamanHata={DeleteProduct}/>


    </div>


    // <div>
    // <MyUI/>
    // <Son gift={shoes}/>
    // <Daughter upahar={shoes}/>
    // <grandchild jutta={shoes}
    // changeUpahar={setShoes}/>
    // </div>
  ) ;
};

export default App;