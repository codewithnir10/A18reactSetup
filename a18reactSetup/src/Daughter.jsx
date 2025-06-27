import React from"react";
const Daughter=({upahar})=>{
    return( <>
    <div>I am daughter component</div>;
    <p>I got{upahar}</p>
    <button onClick={()=>changeUpahar("heels")}>Change gift</button>
    </>)

};
export default Daughter;