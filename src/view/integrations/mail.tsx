import React from 'react';


//Styled-Components
import {
    ContainerButtons
} from './components/styled';

//Componens-Library
import ButtonsIcons from '../../components/buttons/buttonsIcons';


function MailIntegrations() {
    return(
        <>
            <h1>mail</h1>
            <ContainerButtons>
                <ButtonsIcons>Authentication</ButtonsIcons>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
            <ContainerButtons>
                <button>Validate</button>
                <button>Copy</button>
            </ContainerButtons>
        </>
    )
}

export default MailIntegrations;