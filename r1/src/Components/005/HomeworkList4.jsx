const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function HomeworkList4() {
    return (
        <>
            <p>Homework: List #4</p>
        <div> {dogs.map((a, i) => a[0] === a[0].toLowerCase() ? <div key={i}>{a}</div> : null)} </div>
        </>
    )
};

export default HomeworkList4;