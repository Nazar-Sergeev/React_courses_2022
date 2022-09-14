

export default function Character({item:{id, name, status, species, gender, image}}) {

    return (
        <div>
            <div className='block'>
                <div>
                    <h1>{id} - {name} - {species}</h1>
                    <h4>Status: {status}</h4>
                    <h4>Gender: {gender}</h4>
                </div>
                <div>
                    <img className='img' src={image} alt={name}/>
                </div>
            </div>

        </div>
    );
};