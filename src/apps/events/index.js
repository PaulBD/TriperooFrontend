import React from 'react';
import TrustedPartners from '../../components/content/static/trustedPartners';
import FacebookSignup from '../../components/authentication/facebookSignup';

const EventHome = () => {

    document.title = 'All events this week in xxx';

    return (
        <div>
            <div className="container">
                <hr />
                <div className="gap"></div>
                <FacebookSignup />
                <TrustedPartners />
                <div className="gap"></div>
            </div>
        </div>
    );
};

export default EventHome;
