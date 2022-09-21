export default function  Launch({launch:{mission_name, launch_year, links:{mission_patch_small}}}) {

    return (
        <div>
            <div>
                <h3>Mission Name: {mission_name}</h3>
                <h4>Launch Year: {launch_year}</h4>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
}