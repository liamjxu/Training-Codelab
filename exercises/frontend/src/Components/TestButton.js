import styles from "./TestButton.module.css"

/* 
:chosen:
  the current chosen button
:type:
  string
:changeChosen:
  function that change chosen value on parent
:type:
  function
*/
function TestButton ({chosen,changeChosen}) {
  return (
    <div className={styles.bodyContainer}>
        <button onClick={()=>changeChosen("Button 1")}
          /* uncomment for 9.2 className={chosen === 'Button 1' ?
          styles.currencyButtonActive : styles.currencyButtonDefault} */>
          Button1
        </button>
        <button onClick={()=>changeChosen("Button 2")}
          /* uncomment for 9.2 className={chosen === 'Button 2' ?
          styles.currencyButtonActive : styles.currencyButtonDefault} */>
          Button2
        </button>
    </div>         
  );

}

export default TestButton;
