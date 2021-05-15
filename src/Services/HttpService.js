const axios = require('axios');
const baseUrl = "https://api.rootnet.in/covid19-in/";

class HttpServices {
    
    getVerifiedHospitals() {
       return axios.get(baseUrl+"hospitals/beds");
    }

    getCasesReport() {
        return axios.get(baseUrl+"stats/latest");
     }
}

export default HttpServices;