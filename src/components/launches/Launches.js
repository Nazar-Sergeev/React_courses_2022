import {useEffect, useState} from "react";

import {launchesService} from "../../services/launches.service";
import Launch from "../launch/Launch";

export default function Launches() {

    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchesService.getAll()
            .then(value => value.filter(launch => launch.launch_year !== '2020'))
            .then(value =>setLaunches(value))
    }, []);

    return (
        <div>
            {
                launches && launches.map((launch, index) => <Launch key={index} launch={launch}/>)
            }
        </div>
    );
}