import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Integrations from '../view/integrations/index';
import MailIntegrations from '../view/integrations/mail';
import LinkedinIntegrations from '../view/integrations/linkedin';
import WhatsappIntegrations from '../view/integrations/whatsapp';
import CallsIntegrations from '../view/integrations/calls';
import CalendarIntegrations from '../view/integrations/calendar';
import OthersIntegrations from '../view/integrations/others';

function IntegrationsRoutes() {
    return (
        <Router>
            <Integrations>
                <Route exact path="/integrations/" component={MailIntegrations} />            
                <Route path="/integrations/Linkedin" component={LinkedinIntegrations} />
                <Route path="/integrations/whatsapp" component={WhatsappIntegrations} />
                <Route path="/integrations/calls" component={CallsIntegrations} />
                <Route path="/integrations/calendar" component={CalendarIntegrations} />
                <Route path="/integrations/others" component={OthersIntegrations} />
            </Integrations>   
        </Router>       
    )
}
export default IntegrationsRoutes;
