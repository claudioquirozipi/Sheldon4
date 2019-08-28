import React from 'react';
import {Link} from 'react-router-dom';

//Styled-Components
import {
    NavSC
} from './styled';

function Nav() {
    return(
        <NavSC>
            <ul>
                <li><Link to="/integrations/">Mail</Link></li>
                <li><Link to="/integrations/Linkedin">Linkedin</Link></li>
                <li><Link to="/integrations/whatsapp">whatsapp</Link></li>
                <li><Link to="/integrations/calls">calls</Link></li>
                <li><Link to="/integrations/calendar">calendar</Link></li>
                <li><Link to="/integrations/others">others</Link></li>
            </ul>
        </NavSC>
    )
}

export default Nav;