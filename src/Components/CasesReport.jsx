import React from 'react';
import Loader from "react-loader-spinner";
import HttpServices from '../Services/HttpService';

class CasesReport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hospitals: [],
            dataLoaded: false,
            lastOriginUpdate: "",
            lastRefreshed: ""
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let httpServices = new HttpServices();
        httpServices.getCasesReport()
            .then(data => {
                this.setState({
                    hospitals: data.data.data.regional,
                    lastOriginUpdate: data.data.lastOriginUpdate,
                    lastRefreshed: data.data.lastRefreshed,
                    dataLoaded: true,
                });
                console.log(this.state.hospitals);
            })
            .catch(error => {
                alert("Somthing went wrong, Please try again later...!")
            });
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.dataLoaded
                    && (
                        <React.Fragment>
                            <div className="text-center mt-5">
                                <Loader
                                    type="TailSpin"
                                    color="#00BFFF"
                                    height={100}
                                    width={100}
                                    visible={!this.state.dataLoaded}
                                />
                                Fetching records.....! Please wait.
                            </div>
                        </React.Fragment>
                    )
                }

                {this.state.dataLoaded
                    && (
                        <React.Fragment>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 text-center mt-3">
                                        <span className="font-weight-bold text-uppercase"> Cases </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-1">
                                    <div className="col-12 text-right mt-3 small">
                                        <div>
                                            <span className="text-primary"> Last Origin Update :  </span>
                                            <span className="text-secondary"> {this.state.lastOriginUpdate}  </span>
                                        </div>
                                        <div>
                                            <span className="text-primary"> Last Refreshed :  </span>
                                            <span className="text-secondary"> {this.state.lastRefreshed}  </span>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">State</th>
                                                    <th scope="col">Indains</th>
                                                    <th scope="col">Foreigner</th>
                                                    <th scope="col">Discharged</th>
                                                    <th scope="col">Deaths</th>
                                                    <th scope="col">Confirmed</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.hospitals.map((hospital, index) => {
                                                        return (
                                                            <tr className= {hospital.totalConfirmed > 30000 ? 'table-danger' : 'table-success'}>
                                                                <th scope="row">{index+1}</th>
                                                                <td>{hospital.loc}</td>
                                                                <td>{hospital.confirmedCasesIndian}</td>
                                                                <td>{hospital.confirmedCasesForeign}</td>
                                                                <td>{hospital.discharged}</td>
                                                                <td>{hospital.deaths}</td>
                                                                <td>{hospital.totalConfirmed}</td>
                                                            </tr>
                                                        );
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </React.Fragment>
                    )

                }

            </React.Fragment>
        );
    }

}

export default CasesReport;