import React from "react";
import './Custom.css';
import Block from './components/Block';

const App = () => {

  const [block_array, setBlock_array] = React.useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
    
  const [blockValue, setBlockValue] = React.useState(false);

  const handleChange = (e) => {
    console.log(e.target.value)
    setBlockValue(e.target.value)
  }

  return (
    <div>
      The number of block
      <form>
        <input type="text" name="name" onChange={handleChange} />
      </form>
      {<div>
        <Block
          block_array={block_array}
          blockValue={blockValue}
          setBlock_array={setBlock_array} /></div>}
    </div>

  );
};

export default App;

