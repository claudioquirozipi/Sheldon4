import styled from 'styled-components';

interface iModalContainer {
    bgColor: string;
}
interface iContainerCenterContainer {
    bgColor: string;
}

export const ModalContainer = styled.div`
    background: ${(props:iModalContainer) => props.bgColor || "teal"};
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerCenterContainer = styled.div`
    background: ${(props:iContainerCenterContainer) => props.bgColor || "teal"};
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;