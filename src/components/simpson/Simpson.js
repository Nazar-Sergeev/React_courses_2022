export default function Simpson({simpson: {name, surname, age, info, photo}}) {

    return (
        <div className='simpson-block'>
            <h2>{name} {surname}</h2>
            <h4>Age: {age}</h4>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
}