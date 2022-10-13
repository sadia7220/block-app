import React from "react";
import './Custom.css';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function App() {
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const [block_array, setBlock_array]  = React.useState(
  [<div className="blockA" key={0}>
  <h1>A</h1>
  {/*<AiFillCaretLeft className='leftIcon' onClick={aClickToLeftHandler}/>*/}
  <AiFillCaretRight value='A' className='rightIcon' onClick={aClickToRightHandler}/>
  </div>,
  <div className="blockB" key={1}>
  <h1>B</h1>
  <AiFillCaretLeft className='leftIcon' onClick={bClickToLeftHandler}/>
  <AiFillCaretRight className='rightIcon' onClick={bClickToRightHandler}/>
  </div>,
  <div className="blockC" key={2}>
  <h1>C</h1>
  <AiFillCaretLeft className='leftIcon' onClick={cClickToLeftHandler}/>
  <AiFillCaretRight className='rightIcon' onClick={cClickToRightHandler}/>
  </div>,
  <div className="blockD" key={3}>
  <h1>D</h1>
  <AiFillCaretLeft className='leftIcon' onClick={dClickToLeftHandler}/>
  {/*<AiFillCaretRight className='rightIcon' onClick={dClickToRightHandler}/>*/}
  </div>]
 );

  function aClickToRightHandler(){
    let index=0;
    for (index; index < block_array.length; index++){
      if (block_array[index].props.className === 'blockA') {
        break;
      }
    }
    if(index <block_array.length-1){
      [block_array[index], block_array[index+1]] = [block_array[index+1], block_array[index]];
      setBlock_array(block_array);
    }
    if(index===block_array.length-1){
      [block_array[0], block_array[index]] = [block_array[index], block_array[0]];
      setBlock_array(block_array);
    }
 
    const updatedLeftEdge = (index + 1)%block_array.length;
    setCurrentPosition(updatedLeftEdge);
  }


  // function aClickToLeftHandler(){ 
  //   let index=0;
  //   for (index; index < block_array.length; index++){
  //     if (block_array[index].props.className === 'blockA') {
  //       break;
  //     }
  //   }

  //   if(index>0){
  //     [block_array[index-1], block_array[index]] = [block_array[index], block_array[index-1]];
  //   }
  // else if(index===0){
  //   let j=0;
  //   const temp = block_array[index];  
  //   while(j < block_array.length-1){  
  //     block_array[j] = block_array[j+1];  
  //     j++;
  //   }  
  //   block_array[j] = temp;
  // }
  //   const updatedLeftEdge = index - 1 < 0 ? (block_array.length-1 + index) : index - 1;
  //   setCurrentPosition(updatedLeftEdge);
  //   setBlock_array(block_array);
  // }

  function bClickToRightHandler(){ 
    let index=0;
    for (index; index < block_array.length; index++){
      if (block_array[index].props.className === 'blockB') {
        break;
      }
    }
    if(index <block_array.length-1){
      [block_array[index], block_array[index+1]] = [block_array[index+1], block_array[index]];
      setBlock_array(block_array);
    }
    if(index===block_array.length-1){
      [block_array[0], block_array[index]] = [block_array[index], block_array[0]];
      setBlock_array(block_array);
    }
 
    const updatedLeftEdge = (index + 1)%block_array.length;
    setCurrentPosition(updatedLeftEdge);
  }

  function bClickToLeftHandler(){ 
    let index=0;
    for (index; index < block_array.length; index++){
      if (block_array[index].props.className === 'blockB') {
        break;
      }
    }

    if(index>0){
      [block_array[index-1], block_array[index]] = [block_array[index], block_array[index-1]];
    }
    else if(index===0){
      let j=0;
      const temp = block_array[index];  
      while(j < block_array.length-1){  
        block_array[j] = block_array[j+1];  
        j++;
      }  
      block_array[j] = temp;
    }
    const updatedLeftEdge = index - 1 < 0 ? (block_array.length-1 + index) : index - 1;
    setCurrentPosition(updatedLeftEdge);
    setBlock_array(block_array);
  }

  function cClickToRightHandler(){ 
    let index=0;
    for (index; index < block_array.length; index++){
      if (block_array[index].props.className === 'blockC') {
        break;
      }
    }
    if(index <block_array.length-1){
      [block_array[index], block_array[index+1]] = [block_array[index+1], block_array[index]];
      setBlock_array(block_array);
    }
    if(index===block_array.length-1){
      [block_array[0], block_array[index]] = [block_array[index], block_array[0]];
      setBlock_array(block_array);
    }
 
    const updatedLeftEdge = (index + 1)%block_array.length;
    setCurrentPosition(updatedLeftEdge);
  }

  function cClickToLeftHandler(){ 
    let index=0;
    for (index; index < block_array.length; index++){
      if (block_array[index].props.className === 'blockC') {
        break;
      }
    }

    if(index>0){
      [block_array[index-1], block_array[index]] = [block_array[index], block_array[index-1]];
    }
    else if(index===0){
      let j=0;
      const temp = block_array[index];  
      while(j < block_array.length-1){  
        block_array[j] = block_array[j+1];  
        j++;
      }  
      block_array[j] = temp;
    }
    const updatedLeftEdge = index - 1 < 0 ? (block_array.length-1 + index) : index - 1;
    setCurrentPosition(updatedLeftEdge);
    setBlock_array(block_array);
  }

  // function dClickToRightHandler(){ 
  //   let index=0;
  //   for (index; index < block_array.length; index++){
  //     if (block_array[index].props.className === 'blockD') {
  //       break;
  //     }
  //   }
  //   if(index <block_array.length-1){
  //     [block_array[index], block_array[index+1]] = [block_array[index+1], block_array[index]];
  //     setBlock_array(block_array);
  //   }
  //   if(index===block_array.length-1){
  //     [block_array[0], block_array[index]] = [block_array[index], block_array[0]];
  //     setBlock_array(block_array);
  //   }
 
  //   const updatedLeftEdge = (index + 1)%block_array.length;
  //   setCurrentPosition(updatedLeftEdge);
  // }

  function dClickToLeftHandler(){ 
    let index=0;
    for (index; index < block_array.length; index++){
      if (block_array[index].props.className === 'blockD') {
        break;
      }
    }

    if(index>0){
      [block_array[index-1], block_array[index]] = [block_array[index], block_array[index-1]];
    }
    else if(index===0){
      let j=0;
      const temp = block_array[index];  
      while(j < block_array.length-1){  
        block_array[j] = block_array[j+1];  
        j++;
      }  
      block_array[j] = temp;
    }
    const updatedLeftEdge = index - 1 < 0 ? (block_array.length-1 + index) : index - 1;
    setCurrentPosition(updatedLeftEdge);
    setBlock_array(block_array);
  }

  return (
    <div className="App">
      {
        Array.from(
          {length: block_array.length},
          (_,i) => (
            <div key={i}>
              {i === currentPosition ? block_array : null}
            </div>
            
          )
        )
      }
    </div>
  );
}

export default App;