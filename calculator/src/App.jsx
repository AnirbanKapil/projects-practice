
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {

  const buttonName = ["C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ] 

  const [displayBtn,setDisplayBtn] = useState("");
  
  function handleClick (buttonText) {
      if(buttonText === "C"){
           setDisplayBtn("")
      }else if(buttonText === "="){
             const result = eval(displayBtn)
             console.log(result)
             setDisplayBtn(result)
      }else{
        const newDisplay = displayBtn + buttonText
        setDisplayBtn(newDisplay)
      }
  }

  return (
    <div className={styles.calculator}>
      <Display displayBtn={displayBtn}></Display>
      <ButtonsContainer buttonNames={buttonName} handleClick={handleClick}></ButtonsContainer>
    </div>
  );
}

export default App;
