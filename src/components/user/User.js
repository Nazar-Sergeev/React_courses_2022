export default function  User({user, user:{id,name},submit}) {
    return (
        <div>
            <h4>{id} -  {name}</h4>
            <button onClick={() => {submit(user)}}>details</button>
        </div>
    );
}