import React, { useMemo, useState } from "react";

const Child = React.memo(( {data} ) => {
  console.log("Child Rendered")
  return <div> Child Component - {data.name} </div>
});

export default function Parent(){
  const [count, setCount] = useState(0);
  const data = useMemo(()=> ({name: "SRR"}), []);

  return(
    <div>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <p>Parent Count : {count}</p>
      <Child data ={data} />
    </div>
  )
}