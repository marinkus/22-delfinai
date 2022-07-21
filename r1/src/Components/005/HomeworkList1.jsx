const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function HomeworkList1({squareStyle}) {
    return (
        <>
            <p>Homework: List #1</p>
        <div>
             {dogs.map((a, i) => <div style={squareStyle} key={i}>{a}</div>)} 
        </div>
        </>
    )
};

export default HomeworkList1;