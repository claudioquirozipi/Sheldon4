import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import ControllerHome from '../controller/home';
import Login from '../view/login';
import SingUp from '../view/login/singup';
import NewPassword from '../view/login/newPassword';
import ControllerCsvLoader from '../controller/csvLoader';
import RecoverPassword from '../view/login/recoverPassword';
//App Components
import DashBoard from '../view/dashBoard';
import CommunicationFlow from '../view/communicationFlow';
import OpenData from '../view/openData';
import LeadGenerator from '../view/LeadGenerator';
import MediaPlaning from '../view/mediaPlaning';
import StaffAugmentation from '../view/staffAugmentation';
//Admin Components 
import MyProfile from '../view/myProfile';
import Integrations from '../view/integrations';
import IntegrationsRoutes from './integrations';
import Billing from '../view/billing';
import support from '../view/support';

//Nav test
import NavTest from './navtest';


function MyRoutes() {
    return (
        <Router>
                <NavTest />
                
                <Route exact path="/" component={ControllerHome} />            
                <Route path="/login" component={Login}/>
                <Route path="/singup" component={SingUp} />     
                <Route path="/recoverpassword" component={RecoverPassword} />     
                <Route path="/newpassword" component={NewPassword} />
                <Route path="/csv-loader" component={ControllerCsvLoader} />  
                {/* App */}
                <Route path="/dashboard" component={DashBoard} />            
                <Route path="/communication-flow" component={CommunicationFlow} />            
                <Route path="/open-data" component={OpenData} />
                <Route path="/lead-generator" component={LeadGenerator} />
                <Route path="/media-planing" component={MediaPlaning} />
                <Route path="/staff-augmentation" component={StaffAugmentation} />
                {/* Admin */}
                <Route path="/my-profile" component={MyProfile} />
                <Route path="/integrations" component={IntegrationsRoutes} />
                <Route path="/billing" component={Billing} />
                <Route path="/support" component={support} />            
        </Router>
    )
}

export default MyRoutes;

