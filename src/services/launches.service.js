import {axiosServiceLaunches} from "./axios.launches.service";
import {baseUrlLaunches} from "../config/urls";

export const launchesService = {
    getAll: () => axiosServiceLaunches.get(baseUrlLaunches).then(value => value.data)
}