import rand from "../../Functions/rand";

function Kosmosas() {


return (
    <>
    <div>KosTmosas { 5 + 4 } </div>
    <div style={
        {
        color: 'crimson',
        backgroundColor: 'skyblue',
        fontSize: rand(30, 100) + 'px',
        padding: '10px'
    }
    }>
            {/* <div style={{color: 'crimson', backgroundColor: 'skyblue'}}></div> */}
        Marsas
    </div>
    </>
    );
};

export default Kosmosas;