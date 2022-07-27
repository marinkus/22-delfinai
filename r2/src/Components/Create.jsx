import { useState } from "react";
import { useContext } from "react";
import AnimalsContext from "./AnimalsContext";

function Create() {

    const { animalsTypes } = useContext(AnimalsContext);

    const [type, setType] = useState(5);


    return (
        <div className="card m-4">
            <h5 className="card-header">Add new animal</h5>
            <div className="card-body">
                <div className="form-group">
                    <label>Our animal types</label>
                    <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                        {
                            animalsTypes.map(a => <option key={a.id} value={a.id}>{a.type}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>How much is the {animalsTypes.find(a => a.id === Number.parseInt(type)).type}</label>
                    <input type="text" className="form-control" />
                    <small className='form-text text-muted'>Please enter your animal wieght in kg</small>
                </div>
            </div>
        </div>
    )
}

export default Create;