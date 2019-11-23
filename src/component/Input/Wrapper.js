import styled from 'styled-components';
import { grey } from '../../util/global-var'

export const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  padding: 5px;
  input {
    padding: 10px;
    padding-left: 30px;
    width: 100%;
    box-sizing: border-box;
    border: 1px white;
    border-radius: 10px;
    outline: none;
  }
  .icon {
    position: absolute;
    padding: 10px;
    color: ${grey};
  }

`;