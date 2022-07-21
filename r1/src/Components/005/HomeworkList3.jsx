const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function HomeworkList3({squareStyle, circleStyle}) {
    return (
        <>
            <p>Homework: List #3</p>
        <div> {dogs.map((a, i) => i % 2 !== 0 ? <div style={circleStyle} key={i}>{a}</div> : <div style={squareStyle} key={i}>{a}</div>)} </div>
        </>
    )
};

export default HomeworkList3;