import React from 'react';
import {Link} from 'react-router-dom';

//Styled-Componets
import {
    NavCS
} from './styled';
import GridContainerA from '../grid/gridContainerA';

//Assets
import icon from '../../assets/img/nav/icon.svg';
function Nav() {
    return(
        <GridContainerA>
            <NavCS>
                <h2>Dashboard</h2>
                <ul>
                    <li><Link to="/sales-funnel/1"><img src={icon} alt=""/> Sales funnel</Link></li>
                    <li><Link to="/dashboard"><img src={icon} alt=""/>Dashboard</Link></li>
                    <li><Link to="/communication-flow"><img src={icon} alt=""/>Communication flow</Link></li>
                    <li><Link to="/open-data"><img src={icon} alt=""/>Open Data</Link></li>
                    <li><Link to="/lead-generator"><img src={icon} alt=""/>Lead Generator</Link></li>
                    <li><Link to="/media-planing"><img src={icon} alt=""/>Media planing</Link></li>
                    <li><Link to="/staff-augmentation"><img src={icon} alt=""/>Staff augmentation</Link></li>
                </ul>
                <h2>Admin</h2>
                <ul>
                    <li><Link to="/my-profile"><img src={icon} alt=""/>My profile</Link></li>
                    <li><Link to="/integrations/mail"><img src={icon} alt=""/>Integrations</Link></li>
                    <li><Link to="/billing"><img src={icon} alt=""/>Billing</Link></li>
                    <li><Link to="/support"><img src={icon} alt=""/>Support</Link></li>
                    <li><Link to="/login"><img src={icon} alt=""/>Cerrar Seción</Link></li>
                </ul>
            </NavCS>
        </GridContainerA>
    )
}

export default Nav;