import React, {useState} from 'react'
import styles from "./Calculator.module.css";

export default function Calculator() {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInputVal((prevInput) => prevInput + value);
  }

  const handleClear = () => {
    setInputVal("");
    setResult("");
  }

  const handleCalculate = () => {
    try{
      const output = eval(inputVal).toString();
      setInputVal("");
      setResult(output);
    }catch(error){
      setResult("Error");
    }
  }

  return (
    <div className={styles.container}>
      <h1>React Calculator</h1>
      <input type="text" value={inputVal}></input>

      <div className={styles.result}>
        {result}
      </div>


      <div className={styles.buttonGroup}>
        <div>
            <button onClick={()=> handleClick("7")}>7</button>
            <button onClick={()=> handleClick("8")}>8</button>
            <button onClick={()=> handleClick("9")}>9</button>
            <button onClick={()=> handleClick("+")}>+</button>
        </div>

        <div>
            <button onClick={()=> handleClick("4")}>4</button>
            <button onClick={()=> handleClick("5")}>5</button>
            <button onClick={()=> handleClick("6")}>6</button>
            <button onClick={()=> handleClick("-")}>-</button>
        </div>

        <div>
            <button onClick={()=> handleClick("1")}>1</button>
            <button onClick={()=> handleClick("2")}>2</button>
            <button onClick={()=> handleClick("3")}>3</button>
            <button onClick={()=> handleClick("*")}>*</button>
        </div>

        <div>
            <button onClick={handleClear}>C</button>
            <button onClick={()=> handleClick("0")}>0</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={()=> handleClick("/")}>/</button>
        </div>
      </div>

      
    </div>
  )
}
