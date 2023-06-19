import React, { useState } from 'react'

function StandupCard(props) {
    // const {date, releaseCycle, sprintId} = props;
    const {standupCardData, handleStandupCardChange} = props
    
    // console.log(standupCardFormData)
    // console.log(date)
    // const [inputReleaseCycle, setInputReleaseCycle] = useState(releaseCycle);
    // const [inputSprintId, setInputSprintId] = useState(sprintId);
    // console.log(typeof(inputSprintId))

    // const handleReleaseCycleChange = (event) => {
    //     // console.log(event.target.value)
    //     setInputReleaseCycle(event.target.value);
    // }
    // const handleSprintIdChange = (event) => {
    //     event.preventDefault();
    //     // console.log(typeof(event.target.value))
    //     setInputSprintId(event.target.value);
    // }
    return (
        <div>
            <p className="date">{standupCardData.standup_date}</p>
            <label> Release Cycle
                <input type="text" name="release_cycle" value={standupCardData.release_cycle} placeholder={standupCardData.release_cycle} onChange={handleStandupCardChange}/>
            </label>{standupCardData.releaseCycle}
            <label> Sprint ID
                <input type="number" name="sprint_id" value={standupCardData.sprint_id} placeholder={standupCardData.sprint_id} onChange={handleStandupCardChange}/>
            </label>
            
            {/* <p className="release-cycle">
                Release cycle: <span className="pi">{releaseCycle}</span>
            </p> */}
            {/* <p className="sprint-id">
                Sprint ID: <span className="sp-id">{sprintId}</span>
            </p> */}
        </div>
    )
}

export default StandupCard
