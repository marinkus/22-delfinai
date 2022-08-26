import "./styles.css";
import Animals from "./components/animals/Animals";
import Pokemons from "./components/Pokemons";

export default function App() {
  return (
    <div className="App">
      <Animals></Animals>
      <Pokemons></Pokemons>
    </div>
  );
}