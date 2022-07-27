import { useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext";

function M2({kas}) {

    const { pirmas, spalva } = useContext(GlobalContext);

    return <h2 style={{ color: spalva }}>{kas}{pirmas}</h2>
};

export default M2;