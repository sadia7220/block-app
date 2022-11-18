import React from "react";
import '../Custom.css';
import Box from './Box';

const BoxArray = () => {

  const [boxArray, setBoxArray] = React.useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);

  const moveToRight = (i) => {
    const array = [...boxArray];
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
    setBoxArray(array);
  }

  const moveToLeft = (i) => {
    const array = [...boxArray];
    [array[i - 1], array[i]] = [array[i], array[i - 1]];
    setBoxArray(array);
  }

  return (
    <div>
      {boxArray.map((element, i) => {
        const moveLeft = i > 0 ? () => moveToLeft(i) : null;
        const moveRight = i < boxArray.length - 1 ? () => moveToRight(i) : null;
        return (
          <div key={element} >
            <Box
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

