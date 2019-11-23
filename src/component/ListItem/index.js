import React from 'react';
import { Wrapper } from './Wrapper';
import Item from '../Item';

class ListItem extends React.Component {
  render(){
    const { items } = this.props;

    return (
      <Wrapper>
        {
          items.map( item => {
            return <Item item={item} key={item.id} />
          } )
        }
      </Wrapper>
    );
  }
  
}

export default ListItem;
