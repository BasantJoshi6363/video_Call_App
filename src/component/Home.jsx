import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [roomId, setRoomId] = useState()
    const navigate = useNavigate();

    const handleJoin = () => {
       navigate(`/room/${roomId}`)
    }
    return (
        <div>
            <input type="text" value={roomId} onChange={(e) => { setRoomId(e.target.value) }} placeholder='enter Room id' />
            <button onClick={handleJoin}>Join</button>
        </div>
    )
}

export default Home