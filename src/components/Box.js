import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function Box(props) {

  const { element, moveLeft, moveRight } = props;

  return (
    <div className="box">
      <h1>{element}</h1>
      {
        moveLeft ?
          <AiFillCaretLeft className='leftIcon' onClick={moveLeft} />
          : null
      }
      {
        moveRight ?
          <AiFillCaretRight className='rightIcon' onClick={moveRight}  />
          : null
      }
    </div>
  );
}