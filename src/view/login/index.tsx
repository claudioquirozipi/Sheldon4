import * as React from 'react';
import {Link} from 'react-router-dom';
//Components Library
import ContainerCenter from '../../components/modal/containerCenter';
import Paper from '../../components/paper';
import Form from '../../components/form/form';
import InputEmail from '../../components/form/inputEmail';
import InputPassword from '../../components/form/inputPassword';
import InputSubmit from '../../components/form/inputSubmit';
function Login() {
    return(
        <ContainerCenter bgColor="#F8F8F8">
            <Paper urlClouse="/"> 
                <Form>
                    <h1>Good to see<br/> you again</h1>
                    <InputEmail placeholder="Email" error="hay un error"/>
                    <InputPassword placeholder="Password" error="hay un error"/>
                    <InputSubmit value="hola" />
                    <Link to="/recoverpassword">Forgot password?</Link>
                </Form>
            </Paper>
        </ContainerCenter>
    )
}

export default Login;