import React, { useState, useEffect } from 'react'

export function TableRowItems(props) {
  const {standupCardData, handleUpdateRemarks} = props;

  const listItems = standupCardData.individual_updates.map(individual_remarks => 
    <IndividualRemarks 
      individualRemarks={individual_remarks}
      handleUpdateRemarks={handleUpdateRemarks}
    />
  );
    
  return (<>{listItems}</>
  
  );

}

export default TableRowItems

function IndividualRemarks(props) {
  const { individualRemarks, handleUpdateRemarks } = props
  const [individualRemarksData, setIndividualRemarksData] = useState(individualRemarks);
  // console.log(individualRemarksData)
  const handleIndividualRemarksDataChange = (event) => {
    const { name, value } = event.target
    setIndividualRemarksData(
      (prevData) => ({
        ...prevData,
        [name]: value
      }))
    handleUpdateRemarks(individualRemarksData)
  }

  // useEffect(() => updateRemarksList(individualRemarksData), [individualRemarksData])

  return(
    <tr>
      <td>{individualRemarksData.member_name}</td>
      <td>{individualRemarksData.member_position}</td>
      <td>
        <input 
          type="text" 
          name="remarks" 
          value={individualRemarksData.remarks} 
          placeholder={individualRemarksData.remarks}
          onChange={handleIndividualRemarksDataChange}
        />
      </td>
    </tr>
  )
}



