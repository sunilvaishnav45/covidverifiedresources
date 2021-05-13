import React from 'react';

class Team extends React.Component {

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
                This is team details
            </React.Fragment>
        );
    }

}

export default Team;