import Axios from "axios"
import IP from '@/baseurl.json'

export default {
    getData(list, data) {
        return Axios({
            method: 'GET',
            url: IP.ip+list,
            data: data,
        });
    },
    postData(list, data) {
        return Axios({
            method: 'POST',
            url: IP.ip+list,
            data: data,
        });
    }
}
