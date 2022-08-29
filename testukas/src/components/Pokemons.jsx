import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "./Pokemon";

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

      fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then(res => {
        setPokemons(res.results);
        setLoading(false);
      });


    }, []);

    if (loading) {
        return <div className='title'>Loading, please wait...</div>
    } else {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemons list:</h1>
        <ul>
          {
            pokemons.map((pokes, index) => <Pokemon urlas={pokes.url} vardas={pokes.name} key={index}></Pokemon>)
          }{" "}
        </ul>
      </header>
    </div>
  );
};
}
  export default Pokemons;
  