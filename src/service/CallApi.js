import Axios from "axios"
import IP from '@/baseurl.json'

export default {
    getData(list, data) {
        return Axios({
            method: 'POST',
            url: IP.ip+list,
            data: data,
        }).catch(err => {
        });
    }
}
