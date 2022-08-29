import colors from "./colors";
import rand from "./rand";

const Pokemon = ({ urlas, vardas}) => {
    return (
        <li><a style={{color: colors[rand(0, colors.length-1)]}} className="link" href={urlas}>{vardas}</a></li>
    )
}

export default Pokemon;