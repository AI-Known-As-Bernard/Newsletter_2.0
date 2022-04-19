

const award=() =>{
    var student = {name:'Erkel', awards:{regional:['1st Place Computer Programming','2nd Place Computer Problem Solving','3rd Place Computer Applications'],state:['4th Place Computer Programming','5th Place Computer Problem Solving','6th Place Computer Applications'], nationals:[]}}
    let ward = new Map(Object.entries(student.awards))
    const manyAwards=(map,level) =>{
        var final =[]
        let list = map.get(level)
        list.map((award,i) =>{
            console.log(award)
            final.push(<li key={i}>{award}</li>)
        })
        return final
    }

    return(
        <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                <img src="" alt="" />
            </div>
            <div className='flip-card-back'>
                <h1>{student.name}</h1>
                <h4>Regionals</h4>
                <ul>
                    {manyAwards(ward,"regional")}
                </ul>
                <h4>State</h4>
                <ul>
                    {manyAwards(ward,"state")}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default award