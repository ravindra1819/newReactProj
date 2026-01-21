import { useEffect, useState } from "react";
import BoxDisplay from "./BoxDisplay";

function ButtonDisplay() {

  const [firstN, setFirstN] = useState(false);
  const [secondN, setSecondN] = useState(false);
  const [thirdN, setThirdN] = useState(false);
  const [fourthN, setFourthN] = useState(false);

  const [index, setIndex] = useState();

  const toggleFirst = () => setFirstN(!firstN);
  const toggleSecond = () => setSecondN(!secondN);
  const toggleThird = () => setThirdN(!thirdN);
  const toggleFourth = () => setFourthN(!fourthN);

    const reusable = (item1, item2) => {
    const newValue = item1;
    const element = document.getElementsByClassName(item2)[0];
    const child = element.children;
    Array.from(child).forEach(item => {
      item.style.zIndex = 0
      item.style.backgroundColor = "white"
      item.style.border = "1px solid #000";
    })
    const activeElement = document.getElementsByClassName(newValue)[0];
    if (activeElement) {
      activeElement.style.zIndex = 10;
      activeElement.style.border = "2px solid blue";
    }
  }

  useEffect(() => {
    reusable(`toggle`+index , 'SideBox')
  }, [index]);

  const handleClick = (value) => {
    reusable(`Content`+value , 'Content')
    setIndex(value)
  };

  return (
    <>
      <div className="flex">
        <div className="SideBox">
          <button className="toggle1" onClick={toggleFirst}>First</button>
          <button className="toggle2" onClick={toggleSecond}>Second</button>
          <button className="toggle3" onClick={toggleThird}>Third</button>
          <button className="toggle4" onClick={toggleFourth}>Fourth</button>
        </div>
        <div className="Content">
          <button className="Content1" onClick={() => handleClick('1')}>
            {firstN && <BoxDisplay name="First User" />}</button>
          <button className="Content2" onClick={() => handleClick('2')}>
            {secondN && <BoxDisplay name="Second User" />}</button>
          <button className="Content3" onClick={() => handleClick('3')}>
            {thirdN && <BoxDisplay name="Third User" />}</button>
          <button className="Content4" onClick={() => handleClick('4')}>
            {fourthN && <BoxDisplay name="Fourth User" />}</button>
        </div>
      </div>
    </>
  )
}

export default ButtonDisplay;