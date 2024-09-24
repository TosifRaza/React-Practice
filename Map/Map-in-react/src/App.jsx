import React from "react";
import Errormsg from "./Component/Errormsg";
import Listgroup from "./Component/Listgroup";
import Hadding from "./Component/Hadding";
// import 'bootstrap/dist/css/bootstrap.min.css'
function App(){
  let Arr=["Mango","Coconut","Apple","Banana","daliya","bird"];
  return ( 
  // <React.Fragment>
  <>
    <Hadding />
    <Errormsg Arry={Arr}/>
    <Listgroup Arry={Arr}/>
  </>
  // </React.Fragment>
  )
}
export default App