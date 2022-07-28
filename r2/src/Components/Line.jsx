import { useContext } from "react";
import AnimalsContext from "./AnimalsContext";

function Line({ data }) {

    const { animalsTypes } = useContext(AnimalsContext);

    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line__content">
                    <span className="line__content__title">
                        {animalsTypes.find(a => a.id === Number.parseInt(data.type)).type}
                    </span>

                </div>
                <div className="line__content__w">
                    <span className="line__content__title">
                        {data.weight} KG
                    </span>
                </div>
                <div className="line__buttons">
                    <button type="button" className="btn btn-outline-success m-2">EDIT</button>
                    <button type="button" className="btn btn-outline-danger m-2">DELETE</button>
                </div>
            </div>
        </li>
    )

}

export default Line;