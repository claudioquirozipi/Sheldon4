import * as React from 'react';


//Components
import DashBoardNav from '../dashBoardNav';
import Nav from './components/nav';
import Paper from './components/paper';

//interface
interface iIntegrations {
    children: any;
}

function Integrations(props: iIntegrations) {
    return(
        <DashBoardNav>
            <Nav />
            <Paper>
                {props.children}
            </Paper>
        </DashBoardNav>
    )
}

export default Integrations;