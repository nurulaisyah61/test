import React from 'react';
import { Wrapper, ItemDetail, ItemStatus } from './Wrapper';

class Item extends React.Component {

  rupiahFormatting = (amount) => {
    let rupiah = amount.toString();
    const len = rupiah.length;
    for (let i = len-3; i > 0; i= i -3) {
      rupiah = rupiah.substr(0, i) + '.' + rupiah.substr(i);
    }
    return rupiah;
  }

  dateFormatting = (date) => {
    let newDate = new Date(date);
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let formattedDate = newDate.getDate() + " " + months[newDate.getMonth() + 1] + " " +  newDate.getFullYear();
    return formattedDate;
  }

  render(){
    const { item } = this.props;

    return (
      <Wrapper>
        <ItemDetail>
          <div>
          {item.sender_bank.toUpperCase()}{" "}
            <i className="fa fa-arrow-right icon" />
            {" "}{item.beneficiary_bank.toUpperCase()}
          </div>
          <div className="thin">
            {item.beneficiary_name.toUpperCase()}
          </div>
          <div className="thin">
            Rp{this.rupiahFormatting(item.amount)}
            <i className="fa fa-circle icon" />
            {item.completed_at? this.dateFormatting(item.completed_at) : this.dateFormatting(item.completed_at)}
          </div>
        </ItemDetail>
        <ItemStatus className={item.status==='SUCCESS'? 'success' : 'pending'}>
          {item.status}
        </ItemStatus>
        
      </Wrapper>
    );
  }
  
}

export default Item;
