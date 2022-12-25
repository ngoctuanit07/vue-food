import CallAPI from "@/service/CallApi";
import * as Types from "@/constants/food";
export default {
    async getCategory() {
        let obj = {
        };
        let result = await CallAPI.getData(Types.Categories, obj);
        return result.data;
    },
    async getproductlist() {
        let obj = {
        };
        let result = await CallAPI.getData(Types.Productlist, obj);
        return result.data;
    },
    async getMenuFooter() {
        let obj = {
        };
        let result = await CallAPI.getData(Types.Menufooter, obj);
        return result.data;
    }
};
