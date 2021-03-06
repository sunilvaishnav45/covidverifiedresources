import React from 'react';
import Loader from "react-loader-spinner";
import HttpServices from '../Services/HttpService';

class VerifiedHospitals extends React.Component {

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
        httpServices.getVerifiedHospitals()
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
                                        <span className="font-weight-bold text-uppercase"> Hospitals </span>
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
                                                    <th scope="col">Totals Hospitals</th>
                                                    <th scope="col">Total Beds</th>
                                                    <th scope="col">Urban Beds</th>
                                                    <th scope="col">Rural Beds</th>
                                                    <th scope="col">as on</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.hospitals.map((hospital, index) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{index+1}</th>
                                                                <td>{hospital.state}</td>
                                                                <td>{hospital.totalHospitals}</td>
                                                                <td>{hospital.totalBeds}</td>
                                                                <td>{hospital.urbanBeds}</td>
                                                                <td>{hospital.ruralBeds}</td>
                                                                <td>{hospital.asOn}</td>
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

export default VerifiedHospitals;