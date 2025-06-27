import React from 'react'

const grandchild = ({jutta}) => {
  return (<>
    <div style={{backgroundColor:"lightblue"}}>
      I am grand child
    </div>
    <div>I got {jutta}</div>
    </>
  )
};

export default grandchild;
