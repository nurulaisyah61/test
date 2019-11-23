import React from 'react';
import { Wrapper } from './Wrapper';
import { Input } from '../../component/Input';
import { data } from '../../util/data'
import ListItem from '../../component/ListItem';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      value: '',
      items: []
    }
  }

  componentDidMount(){
    const keys = Object.keys(data);
    const items = keys.map( k => {
      return data[k]
    })

    this.setState({
      items: items
    })
    
  }

  onSearch = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render(){
    const { value, items } = this.state;

    return (
      <Wrapper>
        <Input 
          icon='search' 
          onChange={this.onSearch} 
          placeholder='Cari nama' 
          value={value} 
        />
        <ListItem items={items} />
      </Wrapper>
    );
  }
  
}

export default App;
