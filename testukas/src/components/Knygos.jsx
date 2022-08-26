import { useEffect } from "react";
import { useState } from "react";

function Knygos() {

    const [knygos, setKnygos] = useState([]);
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://in3.dev/knygos/")
            .then((response) => response.json())
            .then(res => {
                setKnygos(res);
                setLoading(false);
            });


    }, []);
    useEffect(() => {

        fetch("https://in3.dev/knygos/types/")
            .then((response) => response.json())
            .then(res => {
                setTypes(res);
                setLoading(false);
            });


    }, []);

    if (loading) {
        return <div className='title'>Loading, please wait...</div>
    } else {
        return (
            <div className="App">
                    <h1>Books:</h1>
                    <div className='container'>
                        {
                            knygos.map(knyga => <figure key={knyga.type} className="box"><img src={knyga.img} alt={knyga.title} /><figcaption
                           className="text" >{knyga.title} by {knyga.author}</figcaption>
                           <p className="price">Price: {knyga.price}$</p>{
                            types.map(type => type.id === knyga.id ? <p>{type.title}</p> : null)
                            }</figure>)
                        }
                    </div>
            </div>
        );
    };
}
export default Knygos;
