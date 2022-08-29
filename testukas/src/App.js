import "./styles.css";
import Animals from "./components/animals/Animals";
import Pokemons from "./components/Pokemons";
import Knygos from "./components/Knygos";

export default function App() {
  return (
    <div className="App">
      {/* <Animals></Animals> */}
      <Pokemons></Pokemons>
      {/* <Knygos></Knygos> */}
    </div>
  );
}