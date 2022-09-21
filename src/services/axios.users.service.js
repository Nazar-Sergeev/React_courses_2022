import axios from "axios";

import {baseUrlUsers} from "../config/urls";




export const axiosUsersService = axios.create({
    baseURL: baseUrlUsers
});



