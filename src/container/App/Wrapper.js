import styled from 'styled-components';
import { orange, bgColor } from '../../util/global-var'

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background: ${bgColor};
    min-height: 100vh;
    box-sizing: border-box;
    &::before {
        display: block;
        content:'';
        height: 10px;
        width: 100%;
        background: ${orange};
    }
`;