import { memo } from "react";

export interface arrayProp {
  arr: Array<number>;
}

const ChildComponent4 = ({ arr }: arrayProp) => {
  console.log("component4 just re-rendered");
  return (
    <div id="inc_div">
      <p>
        {"[" +
          arr.map((num, idx) => {
            return idx != 0 ? ` ${num}` : `${num}`;
          }) +
          "]"}
      </p>
    </div>
  );
};
export default memo(ChildComponent4);
