import * as React from 'react';

//Components
import DashBoardNav from '../dashBoardNav';
import Card from './card';

//Styled-Components
import {
    ContainerCommunicationFlow
} from './styled';

//Data
import {data} from '../../controller/communicationFlow/data';


function CommunicationFlow() {
    return(
        <DashBoardNav>
            <ContainerCommunicationFlow>
                {
                    data.map((data, i)=> {
                        return(
                            <Card key={i} data={data}/>
                        )
                    })
                }
            </ContainerCommunicationFlow>
        </DashBoardNav>
    )
}

export default CommunicationFlow;