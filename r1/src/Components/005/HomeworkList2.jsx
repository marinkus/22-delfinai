const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'].sort((a, b) => b.length - a.length);

function HomeworkList2({circleStyle}) {
    return (
        <>
            <p>Homework: List #2</p>
        <div> {dogs.map((a, i) => <div style={circleStyle} key={i}>{i + 1}. {a}</div>)} </div>
        </>
    )
};

export default HomeworkList2;