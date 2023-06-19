import React, { useState, useEffect } from 'react'
import StandupCard from './StandupCard'
import axios from 'axios'

function Home() {
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
        "notes": "create standup card test"
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
    useEffect(() => {
        axios
          .get("http://127.0.0.1:8000/api/standupcard/yesterday/")
          .then((res) => console.log(res.data[0]))
          .catch((err) => console.log(err.response.data));
      }, []);

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
    // console.log(standupCardToday)
    // console.log(standupCardYesterday)
   
    return (
        <div>
            <h1>YESTERDAY</h1>
            <StandupCard 
                standupCardData={standupCardYesterday}
                handleStandupCardChange={handleStandupCardYesterdayChange}
                updateStandupRemarks={updateStandupRemarksYesterday}
            />
            <h1>TODAY</h1>
            <StandupCard 
                standupCardData={standupCardToday}
                handleStandupCardChange={handleStandupCardTodayChange}
                updateStandupRemarks={updateStandupRemarksToday}
            />
        </div>
    )
}

export default Home
