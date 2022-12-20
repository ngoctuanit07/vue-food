import CallAPI from "@/service/CallApi";
import * as Types from "@/constants/food";

export default {
    async Menu(number) {
        let data = {
            employeeCategoryID: number,
        };
        let result = await CallAPI.getData(Types.Menu, data);
        return result.data;
    }
};
