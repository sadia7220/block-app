import React from "react";
import './Custom.css';
import Block from './components/Block';

const App = () => {

  const [block_array, setBlock_array] = React.useState(['A', 'B', 'C', 'D']);

  return (
    <div>
      <Block
        block_array={block_array}
        setBlock_array={setBlock_array} />
    </div>

  );
};

export default App;

