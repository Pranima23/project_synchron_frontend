import React, { useState, useEffect } from 'react'

export function TableRowItems(props) {
  const {standupCardData, updateStandupRemarks} = props;
  const [remarksList, setRemarksList] = useState(standupCardData.individual_updates)
  const updateRemarksList = (updatedData) => {
    let remList = remarksList;
    
    remList = remList.map((ele) => {
      if (ele.member === updatedData.member) {
          ele = updatedData;
      }    
      return ele;
    });
    setRemarksList((prevData) => remList)   
  }

  useEffect(() => updateStandupRemarks(remarksList), [remarksList])

  const listItems = standupCardData.individual_updates.map(individual_remarks => 
    <IndividualRemarks 
      individualRemarks={individual_remarks}
      updateRemarksList={updateRemarksList}
    />
  );
    
  return (<>{listItems}</>
  
  );

}

export default TableRowItems

function IndividualRemarks(props) {
  const { individualRemarks, updateRemarksList } = props
  const [individualRemarksData, setIndividualRemarksData] = useState(individualRemarks);
  // console.log(individualRemarksData)
  const handleIndividualRemarksDataChange = (event) => {
    const { name, value } = event.target
    setIndividualRemarksData(
      (prevData) => ({
        ...prevData,
        [name]: value
      }))
  }

  useEffect(() => updateRemarksList(individualRemarksData), [individualRemarksData])

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



