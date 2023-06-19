import React from 'react'
import RemarksItems from './TableRowItems'


export function Table(props) {
    const {standupCardData, updateStandupRemarks} = props
    return (
        <div>
        <table>
                <tr>
                    <th>Members</th>
                    <th>Position</th>
                    <th>Remarks</th>
                </tr>
                <RemarksItems
                    standupCardData={standupCardData}
                    updateStandupRemarks={updateStandupRemarks}
                />
                {/* const remarksList =  */}
                
                
            </table>
        </div>
    )
}

export default Table
