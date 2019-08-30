import * as React from 'react';
import {Link} from 'react-router-dom';

//Components
import GridContainerB from '../grid/gridContainerB';

//Styled-Components
import {
    NavContainer,
    LinkContainer
} from './styled';
import img1 from '../../assets/img/salesFunnel/database.svg';
import img2 from '../../assets/img/salesFunnel/filter.svg';
import img3 from '../../assets/img/salesFunnel/calendar.svg';

function SalesFunnelNav() {
    return(
        <GridContainerB>
            <NavContainer>
                <LinkContainer>
                    <Link to="/sales-funnel/1"><img src={img1} alt=""/></Link>
                    <Link to="/sales-funnel/2"><img src={img2} alt=""/></Link>
                    <Link to="/sales-funnel/3"><img src={img3} alt=""/></Link>
                </LinkContainer>
                <h1>Home Nav</h1> 
            </NavContainer>
        </GridContainerB>
    )
}

export default SalesFunnelNav;