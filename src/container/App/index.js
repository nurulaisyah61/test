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
      items: [],
      filtered: []
    }
  }

  componentDidMount(){
    const keys = Object.keys(data);
    const items = keys.map( k => {
      return data[k]
    })

    this.setState({
      items: items,
      filtered: items
    })
    
  }

  onSearch = (event) => {
    const {items} = this.state;
    let value = event.target.value.toLowerCase();
    this.setState({
      value: event.target.value
    })

    let newList = []

    if (value !== "") {
      let currentList = items;
      newList = currentList.filter(item => {
        const lc = item.beneficiary_name.toLowerCase();
        return lc.includes(value);
      });
    } else {
      newList = items;
    }
      
    this.setState({
      filtered: newList
    });
  }

  render(){
    const { value, filtered } = this.state;

    return (
      <Wrapper>
        <Input 
          icon='search' 
          onChange={this.onSearch} 
          placeholder='Cari nama' 
          value={value} 
        />
        <ListItem items={filtered} />
      </Wrapper>
    );
  }
  
}

export default App;
