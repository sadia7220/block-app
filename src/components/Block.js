import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function Block(props) {

  const clickToRightHandler = (val) => {
    let index = 0;
    for (index; index < props.block_array.length; index++) {
      if (props.block_array[index] === val) {
        break;
      }
    }
    if (index === 0 || index < props.block_array.length - 1) {
      const copyArray = [...props.block_array];
      [copyArray[index], copyArray[index + 1]] = [copyArray[index + 1], copyArray[index]];
      props.setBlock_array(copyArray);
    }
  }

  const clickToLeftHandler = (val) => {
    let index = 0;
    for (index; index < props.block_array.length; index++) {
      if (props.block_array[index] === val) {
        break;
      }
    }
    if (index > 0 || index === props.block_array.length - 1) {
      const copyArray = [...props.block_array];
      [copyArray[index - 1], copyArray[index]] = [copyArray[index], copyArray[index - 1]];
      props.setBlock_array(copyArray);
    }
  }

  return (
    <div className="App">
      {
        props.block_array.slice(0,props.blockValue)?.map((element, i) => (
          <div className={`blockA`} key={element}>
            <h1>{element}</h1>   
            {
              i === 0 ?
                <AiFillCaretRight onClick={() => clickToRightHandler(element)} className='rightIcon' />
                : i === props.blockValue - 1 ?
                  <AiFillCaretLeft onClick={() => clickToLeftHandler(element)} className='leftIcon' />
                  :
                  <>
                    <AiFillCaretLeft onClick={() => clickToLeftHandler(element)} className='leftIcon' />
                    <AiFillCaretRight onClick={() => clickToRightHandler(element)} className='rightIcon' />
                  </>
          }
          </div>
        ))
      }
    </div>
  );
}