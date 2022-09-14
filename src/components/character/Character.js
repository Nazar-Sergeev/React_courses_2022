

export default function Character({item:{id, name, status, species, gender, image}}) {

    return (
        <div>
            <div >
                <div>
                    <h1>{id} - {name} - {species}</h1>
                    <h4>Status: {status}</h4>
                    <h4>Gender: {gender}</h4>
                </div>
                <div>
                    <img src={image} alt={name}/>
                </div>
            </div>

        </div>
    );
};