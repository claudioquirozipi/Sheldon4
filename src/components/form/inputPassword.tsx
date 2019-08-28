import * as React from 'react';

//Styled-Components
import {
    ContainerInput
} from './styled';
//Assets
import img1 from './img/email.svg';
import img2 from './img/eye.svg';

interface iInput {
    placeholder: string;
    error: string;
}

function InputPassword(props: iInput) {
    const {placeholder, error} = props;
    return(
        <ContainerInput>
            <img src={img1} alt=""/>
            <input type="password" placeholder={placeholder}/>
            <img src={img2} alt=""/>
            <span>{error}</span>
        </ContainerInput>
    )
}

export default InputPassword;