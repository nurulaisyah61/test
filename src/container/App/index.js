import React from 'react';
import { Wrapper } from './Wrapper';
import { Input } from '../../component/Input';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      value: ''
    }
  }

  onSearch = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render(){
    const { value } = this.state;

    return (
      <Wrapper>
        <Input 
          type='search' 
          onChange={this.onSearch} 
          placeholder='Cari nama' 
          value={value} 
        />
      </Wrapper>
    );
  }
  
}

export default App;
