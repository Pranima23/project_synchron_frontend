import React, { useState } from 'react'
import Remarks from './Table'
import StandupInfo from './StandupInfo'
import StandupQuestions from './StandupQuestions'

function StandupCard(props) {
  const {standupCardData, handleStandupCardChange, updateStandupRemarks} = props;
  // const [standupCardData, setStandupCardData] = useState(standupCard);
  // console.log(standupCardData.individual_updates)
  // console.log(standupCard.id)
  return (
    <div className="standup-card">
      <StandupInfo 
        standupCardData={standupCardData}
        handleStandupCardChange={handleStandupCardChange}
      />
      <StandupQuestions/>
      <Remarks 
        standupCardData={standupCardData}
        updateStandupRemarks={updateStandupRemarks}
      />
    </div>
  )
}

export default StandupCard
