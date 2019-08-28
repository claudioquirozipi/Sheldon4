import * as React from 'react';

//Components
import DashBoardNav from '../dashBoardNav';

//Components-Libraly
import ContainerCenter from '../../components/modal/containerCenter';
import CardCQ from '../../components/cards/index';

//Assest
import imgVideo from '../../assets/img/openData/video.png';

function OpenData() {
    return(
        <DashBoardNav>
            <ContainerCenter bgColor="transparent">
                <h1>Open data service</h1>
                <CardCQ>
                    <div>
                       <img src={imgVideo} alt="hola"/>
                    </div>
                    <div>
                        <p>
                            1.350 desisores de compra fueron encontrados que <br/>
                            comparten los mismos criterios que tus clientes Ver más
                        </p>
                        <button>Adquirir</button>
                    </div>
                </CardCQ>
            </ContainerCenter>
        </DashBoardNav>
    )
}

export default OpenData;