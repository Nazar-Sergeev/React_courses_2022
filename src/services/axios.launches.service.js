import axios from "axios";

import {baseUrlLaunches} from "../config/urls";


export const axiosServiceLaunches = axios.create({
    baseURL: baseUrlLaunches
});
