import * as React from 'react';

//Styled-Components
import {
    FormSC
} from './styled';

//Interface
interface iForm {
    children: any;
}

function Form(props: iForm) {
    return(
        <FormSC>
            {props.children}
        </FormSC>
    )
}

export default Form;