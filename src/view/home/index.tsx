import * as React from 'react';

//Components
import DashBoardNav from '../dashBoardNav';
import TableHome from './tableHome';

//Styled-Components
import {
    CardHomeSC
} from './styled';

function Home() {
    return(
        <DashBoardNav>
            <CardHomeSC>

                <TableHome />
            </CardHomeSC>
        </DashBoardNav>
    )
}

export default Home;

