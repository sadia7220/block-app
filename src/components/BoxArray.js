import React from "react";
import '../Custom.css';
import Box from './Box';

const BoxArray = () => {

  const [blockArray, setBlockArray] = React.useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);

  const moveToRight = (index) => {
    const copyArray = [...blockArray];
    [copyArray[index], copyArray[index + 1]] = [copyArray[index + 1], copyArray[index]];
    setBlockArray(copyArray);
  }

  const moveToLeft = (index) => {
    const copyArray = [...blockArray];
    [copyArray[index - 1], copyArray[index]] = [copyArray[index], copyArray[index - 1]];
    setBlockArray(copyArray);
  }

  return (
    <div>
      {blockArray.map((element, i) => {
        const moveLeft = i > 0 ? () => moveToLeft(i) : null;
        const moveRight = i < blockArray.length - 1 ? () => moveToRight(i) : null;
        return (
          <div key={element}>
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

