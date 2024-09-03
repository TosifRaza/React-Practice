import React from "react";
function App(){
  let Arr=["Mango","Coconut","Apple","Banana","daliya"];
  return (
    
  <React.Fragment>
    <h1>LIST ITEMS</h1>
    <ul className="list-group">
      {
        Arr.map(item=>  <li key={item} className="list-group-item">{item}</li>)
      }
    </ul>
    
  </React.Fragment>
  )
}
export default App