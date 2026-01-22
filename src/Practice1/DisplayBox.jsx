import { useEffect, useState } from "react"

export default function DisplayBox() {

  const [change, setChange] = useState('');
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if(counter === 10){
      setDisable(true);
    }
    document.title = "colors "+ counter
  }, [counter])

  const handleButton = (color) => {
    // const main = document.getElementsByClassName("DColor")[0];
    // const child = main.children[0];
    // child.style.backgroundColor = color;
    setChange(color)
    setCounter(counter+1)
  }

  return (
    <>
      <div className="DBMain">
        <button className="DBchild1 " disabled={disable} onClick={() => handleButton("blue")}>blue</button>
        <button className="DBchild2 " disabled={disable} onClick={() => handleButton("green")}>green</button>
        <button className="DBchild3 " disabled={disable} onClick={() => handleButton("pink")}>pink</button>
        <button className="DBchild4 " disabled={disable} onClick={() => handleButton("violet")}>violet</button>
      </div>
      <div style={{ backgroundColor: change }} className="DColor">
        <p>testing</p>
      </div>
    </>
  )
}