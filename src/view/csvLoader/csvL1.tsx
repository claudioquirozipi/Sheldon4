import * as React from 'react';
import {Link} from 'react-router-dom';
//Components Library
import ContainerCenter from '../../components/modal/containerCenter';
import Button from '../../components/buttons';

//Styled-Components
import {
    ContainerCsvLoader,
    ContainerButtons
} from './styled';

//Assets
import img from '../../assets/img/csvLoader/users.svg';

function CsvLoader1() {
    return(
        <ContainerCenter bgColor="white">
            <ContainerCsvLoader>
                <img src={img} alt="users"/>
                <h1>Definamos tu target</h1>
                <p>
                    Esto funciona así, adjuntas los clientes y Sheldon sabrá todo <br/>
                    sobre ellos para decirte como llegar de manera efectiva. <br/>
                    Si todavía no comprendes <Link to="https://www.youtube.com/">MIRA ESTE VIDEO.</Link>
                </p>
                <ContainerButtons>
                    <Button text="IOs" bgColor="#3FC180" disable={false}/>
                    <Button text="Windows" bgColor="#3FC180" disable={false}/>
                </ContainerButtons>
            </ContainerCsvLoader>
        </ContainerCenter>
    )
}

export default CsvLoader1;