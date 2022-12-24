import CallAPI from "@/service/CallApi";
import * as Types from "@/constants/food";
export default {
    async getCategory() {
        let obj = {
        };
        let result = await CallAPI.getData(Types.Categories, obj);
        return result.data;
    },
    async getMenuFooter() {
        let obj = {
        };
        let result = await CallAPI.getData(Types.Menufooter, obj);
        return result.data;
    }
};
