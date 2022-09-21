import {useEffect, useState} from "react";

import {usersService} from "../../services/users.service";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value))

    }, []);
    const submit = (data) => {
        setUserDetails(data)
    }

    return (
        <div>
            {
                userDetails && <h3>{userDetails.name} - {userDetails.username}</h3>
            }
            <hr/>
            {
                users.map(user => <User key={user.id} user={user} submit={submit}/>)
            }
        </div>
    );
}