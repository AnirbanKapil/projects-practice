import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({buttonNames,handleClick}) => {
    
  
    return (
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button key= {buttonName} className={styles.button} onClick={()=>(handleClick(buttonName))}>{buttonName}</button>
        ))}
      </div>
    );
  };
  
  export default ButtonsContainer;