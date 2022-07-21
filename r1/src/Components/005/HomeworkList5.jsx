const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function HomeworkList5() {
    return (
        <>
            <p>Homework: List #5</p>
        <div> {dogs.map((a, i) => a.length > 6 ? <div style={{color: 'green'}} key={i}>{a.length}</div> : <div style={{color: 'red'}} key={i}>{a.length}</div>)} </div>
        </>
    )
};

export default HomeworkList5;