import styled from 'styled-components';
import {MQ} from '../../config/media';

interface iDBNShadowmContainer {
    visible: boolean;
}

export const PageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    min-height: 100vh;
    background: #F1F4F9;
`;

export const DashBoardNavContainer = styled.div`
    position: relative;
    height: 100vh;
    width:0 ;
    @media ${MQ.md} {
        width: 317px;
    }
`;
export const DBNShadowmContainer = styled.div`
    position: fixed;
    top:0;
    width: ${(props: iDBNShadowmContainer) => props.visible ? "100%" : "0%"};
    height: 100vh;
    background: rgba(0,0,0,.4);
    left: ${(props: iDBNShadowmContainer ) => props.visible ? "0px": "-235px" };
    @media ${MQ.md} {
        left: 0;
    }
    nav {
        padding: 53px 0;
        background: #004DA9 ;
        width: 235px;
        height: 100vh;
    }
`;
export const DBNTitle = styled.h2`
    color: white;
`;

export const Page = styled.div`
    width: 100%;
    & > div {
        padding: 25px;
    }
    
    
`;