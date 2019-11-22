import styled from 'styled-components';
import { orange, green } from '../../util/global-var'

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    &::before {
        display: block;
        content:'';
        height: 10px;
        width: 100%;
        background: ${orange};
    }
`;