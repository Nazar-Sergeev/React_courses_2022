import {useState} from "react";
import Character from "../character/Character";

export default function Characters() {

    let [characters, setCharacters] = useState([]);

                console.log(characters);
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(value => {
                setCharacters(value.results)
            });

    return (
        <div>
            {
                characters.map(character => <Character key={character.id} item = {character}/>).slice(0, 6)
            }
        </div>
    );
}