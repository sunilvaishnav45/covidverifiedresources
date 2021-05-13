import React from 'react';

class VerifiedHospitals extends React.Component {

    constructor() {
        super();
        this.state = {
            hospitals : [],
        }
    }

    componentDidMount() {
        //TODO fetch verfied hospitals here
    }

    render() {
        return (
            <React.Fragment>
                This is hospital details
            </React.Fragment>
        );
    }

}

export default VerifiedHospitals;