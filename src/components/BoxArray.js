import React from "react";
import '../Custom.css';
import Box from './Box';

const BoxArray = () => {

  const numBoxes = 50;

  const arr1 = Array(...Array(parseInt(numBoxes)).keys());

  const [arr, setArr] = React.useState(arr1);

  const moveToRight = (i) => {
    const array = [...arr];
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
    setArr(array);
  }

  const moveToLeft = (i) => {
    const array = [...arr];
    [array[i - 1], array[i]] = [array[i], array[i - 1]];
    setArr(array);
  }


  return (
    <div>
      {arr.map((element, i) => {

        const moveLeft = i > 0 ? () => moveToLeft(i) : null;
        const moveRight = i < numBoxes - 1 ? () => moveToRight(i) : null;
       
        return (
          <div key={element}>
            <Box
              i={i}
              element={element}
              moveLeft={moveLeft}
              moveRight={moveRight}
            />
          </div>
        ) 
      })}
    </div>
  );
};

export default BoxArray;

