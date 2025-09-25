import { memo } from "react";

interface colorCallback {
  colorCB: (s: string) => void;
}
// colorCB will be our callback function that is from the parent setter


const ChildComponent3 = ({ colorCB }: colorCallback) => {
  console.log("component3 just re-rendered");
  const changeColor = () => {
    const newColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    //generate new color string
    colorCB(newColor);
  };
  return (
    <div id="inc_div2">
      <button id="inc_button" onClick={changeColor}>
        changeColor
      </button>
    </div>
  );
};
export default memo(ChildComponent3);
