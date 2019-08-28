import * as React from 'react';
import {Link} from 'react-router-dom';

//Styled-Components
import {
    PageContainer,
    DashBoardNavContainer,
    DBNShadowmContainer,
    DBNTitle,
    Page
} from './styled';
interface IDashboard {
    children: any;
}

function Dashboard(props: IDashboard) {
    return(

        <PageContainer>
            <DashBoardNavContainer >
                <DBNShadowmContainer visible={false}>

                    <nav>
                        <DBNTitle>Dashboard</DBNTitle>
                        <ul>
                            <li><Link to="/">Sales funnel</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/communication-flow">Communication flow</Link></li>
                            <li><Link to="/open-data">Open Data</Link></li>
                            <li><Link to="/lead-generator">Lead Generator</Link></li>
                            <li><Link to="/media-planing">Media planing</Link></li>
                            <li><Link to="/staff-augmentation">Staff augmentation</Link></li>
                        </ul>
                        <DBNTitle>Admin</DBNTitle>
                        <ul>
                            <li><Link to="/my-profile">My profile</Link></li>
                            <li><Link to="/integrations">Integrations</Link></li>
                            <li><Link to="/billing">Billing</Link></li>
                            <li><Link to="/support">Support</Link></li>
                            <li><Link to="/login">Cerrar Seción</Link></li>
                        </ul>
                    </nav>
                </DBNShadowmContainer>
            </DashBoardNavContainer>
            <Page><div>
                {props.children}
            </div></Page>
        </PageContainer>
    )
}

export default Dashboard;