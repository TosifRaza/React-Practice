import React from "react";
import Errormsg from "./Component/Errormsg";
import Listgroup from "./Component/Listgroup";
import Hadding from "./Component/Hadding";
import Container from "./Component/Container.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css'
function App(){
  let Arr=["Mango","Coconut","Apple","Banana","daliya","bird"];
  return (
  <Container>
    <Hadding />
    <Errormsg Arry={Arr}/>
    <Listgroup Arry={Arr}/>
  </Container>
  )
}
export default App