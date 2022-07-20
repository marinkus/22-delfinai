import rand from "../../Functions/rand";

function Kosmosas({spalva, krastas, manoStilius}) {


return (
    <>
    <div>KosTmosas { 5 + 4 } </div>
    <div style={
        {
        color: spalva,
        backgroundColor: 'skyblue',
        fontSize: rand(30, 100) + 'px',
        padding: krastas
    }
    }>
            {/* <div style={{color: 'crimson', backgroundColor: 'skyblue'}}></div> */}
        Marsas
    </div>
    <div style={manoStilius}>Absurdas</div>
    </>
    );
};

export default Kosmosas;