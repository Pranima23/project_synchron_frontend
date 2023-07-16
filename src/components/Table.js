import React from 'react'
import RemarksItems from './TableRowItems'


export function Table(props) {
    const {standupCardData, handleUpdateRemarks} = props
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
                    handleUpdateRemarks={handleUpdateRemarks}
                />
                {/* const remarksList =  */}
                
                
            </table>
        </div>
    )
}

export default Table
