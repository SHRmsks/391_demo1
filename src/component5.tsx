import { useState, memo } from "react";

export interface callback {
  cb: (arr: Array<number>) => Array<number>;
}

const ChildComponent5 = ({ cb }: callback) => {
  console.log("component5 just re-rendered");
  const randomarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [newarr, setNewarr] = useState<Array<number>>([...randomarr]);

  return (
    <div id="inc_div2">
      <p>
        {"[" +
          newarr.map((num, idx) => {
            return idx != 0 ? ` ${num}` : `${num}`;
          }) +
          "]"}
      </p>
      <button id="inc_button" onClick={() => setNewarr(cb(randomarr))}>
        {" "}
        click me
      </button>
    </div>
  );
};
export default memo(ChildComponent5);
