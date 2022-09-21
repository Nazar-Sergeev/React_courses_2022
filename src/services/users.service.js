import {axiosUsersService} from "./axios.users.service";
import {urls} from "../config/urls";


export const usersService = {
    getAll: () => axiosUsersService.get(urls.users).then(value => value.data)
};