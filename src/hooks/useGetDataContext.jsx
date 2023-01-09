import { useContext } from "react";
import { GetDataContext } from "../providers/GetDataProvider";



export const useGetDataContext = () => {
    return useContext(GetDataContext);
};