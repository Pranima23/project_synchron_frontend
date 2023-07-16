import React, { useState, useEffect } from 'react'
import StandupCard from './StandupCard'
import axios from 'axios'

function Home() {
    // const [standupCardToday, setStandupCardToday] = useState({})
    const [standupCardToday, setStandupCardToday] = useState({
        "team": "",
        "standup_date": "2023-06-19",
        "release_cycle": "",
        "sprint_id": null,
        "individual_updates": [
            {
                "updated_at": "2023-06-19T08:33:31.653988+05:45",
                "member": 7,
                "member_name": "Irajan Shrestha",
                "member_position": "Back",
                "remarks": ""
            },
            {
                "updated_at": "2023-06-19T08:33:31.665368+05:45",
                "member": 6,
                "member_name": "Megha Bhattarai",
                "member_position": "QA",
                "remarks": "test ok for extra field"
            }
        ],
        "notes": "ooo"
    });
    const [standupCardYesterday, setStandupCardYesterday] = useState({
        "id": 43,
        "team": "Network Intelligence",
        "standup_date": "2023-06-18",
        "release_cycle": "3",
        "sprint_id": 14,
        "individual_updates": [
            {
                "updated_at": "2023-06-19T08:33:31.653988+05:45",
                "member": 7,
                "member_name": "Irajan Shrestha",
                "member_position": "Back",
                "remarks": ""
            },
            {
                "updated_at": "2023-06-19T08:33:31.665368+05:45",
                "member": 6,
                "member_name": "Megha Bhattarai",
                "member_position": "QA",
                "remarks": "test ok for extra field"
            }
        ],
        "notes": "create standup card test"
    });
   
    
    // useEffect(() => {
    //     const url = 'http://127.0.0.1:8000/api/standupcard/today'; 
    //     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3ODgyNjYwLCJpYXQiOjE2ODcwMTg2NjAsImp0aSI6ImQxODY3NjhiYzk0NjQ5NDM5YTM1ODViZTYwMTY5ZTEyIiwidXNlcl9pZCI6M30.svayfAUag7cvMibXKfVELh7JLdATMgJufTYZjcsaD6U'; 
    //     axios.get(url, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json' 
    //             },
    //         })
    //         .then(response => {
    //             // Handle the response 
    //             console.log(response.data[1]); 
    //             const data = response.data[1]
    //             setStandupCardToday(data)
    //             updateStandupRemarksToday(data.individual_updates)
    //         }) 
    //         .catch(error => {
    //             // Handle the error 
    //             console.error(error); });
    // }, [])

    const handleStandupCardTodayChange = (event) => {
        const { name, value} = event.target;
        // console.log(name, value)
        setStandupCardToday(
            (prevStandupCardToday) => ({
                ...prevStandupCardToday, 
                [name]: value
            })
        );
    }
    const handleStandupCardYesterdayChange = (event) => {
        const { name, value} = event.target;
        // console.log(name, value)
        setStandupCardYesterday(
            (prevStandupCardYesterday) => ({
                ...prevStandupCardYesterday, 
                [name]: value
            })
        );
    }
    const updateStandupRemarksToday = (updatedRemarks) => {
        setStandupCardToday(
            (prevCard) => ({
                ...prevCard,
                individual_updates: updatedRemarks
            })
        );
    }
    const updateStandupRemarksYesterday = (updatedRemarks) => {
        setStandupCardYesterday(
            (prevCard) => ({
                ...prevCard,
                individual_updates: updatedRemarks
            })
        );
    }
    const handleUpdateRemarksToday = (updatedRemarks) => {
        const updatedStandupCard = { ...standupCardToday };
           
        const memberIndex = updatedStandupCard.individual_updates.findIndex(
        (update) => update.member === updatedRemarks.member
        );

        if (memberIndex !== -1) {
        updatedStandupCard.individual_updates[memberIndex].remarks = updatedRemarks.remarks;
        }
        setStandupCardToday(updatedStandupCard)
    }
    const handleUpdateRemarksYesterday = (updatedRemarks) => {
        const updatedStandupCard = { ...standupCardToday };
           
        const memberIndex = updatedStandupCard.individual_updates.findIndex(
        (update) => update.member === updatedRemarks.member
        );

        if (memberIndex !== -1) {
        updatedStandupCard.individual_updates[memberIndex].remarks = updatedRemarks.remarks;
        }
        setStandupCardYesterday(updatedStandupCard)
    }
    // console.log(standupCardToday)
    // console.log(standupCardYesterday)
   
    return (
        <div>
            {standupCardToday ? (
                <div>
                    <h1>YESTERDAY</h1>
                    <StandupCard 
                        standupCardData={standupCardYesterday}
                        handleStandupCardChange={handleStandupCardYesterdayChange}
                        handleUpdateRemarksYesterday={handleUpdateRemarksYesterday}
                    />
                    <h1>TODAY</h1>
                    <StandupCard 
                        standupCardData={standupCardToday}
                        handleStandupCardChange={handleStandupCardTodayChange}
                        handleUpdateRemarksToday={handleUpdateRemarksToday}
                        handleUpdateRemarksYesterday={handleUpdateRemarksYesterday}
                    />
                </div>
            ) : (<p>no data</p>) }
        </div>
    )
}

export default Home
