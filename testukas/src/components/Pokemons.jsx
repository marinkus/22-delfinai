import { useEffect } from "react";
import { useState } from "react";
import colors from "./colors";
import rand from "./rand";

function Pokemons() {

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
            pokemons.map(pokes => <li key={pokes.name}><a style={{color: colors[rand(0, colors.length-1)]}} className="link" href={pokes.url}>{pokes.name}</a></li>)
          }
        </ul>
      </header>
    </div>
  );
};
}
  export default Pokemons;
  