import styled from 'styled-components';
import { green, orange } from '../../util/global-var';

export const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  background: white;
  display: flex;
  flex-direction: row;
  height: 80px;
  margin: 5px 0;
  border-radius: 10px;
  
  &::before{
    display: block;
    content: '';
    height: 100%;
    width: 5px;
    background: ${green};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.2; 
  padding-left: 5px;
  .thin {
    font-size: 12px;
    .fa {
      font-size: 7px;
      padding: 5px;
    }
  }
`;

export const ItemStatus = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
  margin:  auto;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  &.success {
    background: ${green};
  }
  &.pending {
    background: ${orange};
  }
`;