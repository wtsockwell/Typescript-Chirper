import * as React from 'react'
import { useState, useEffect } from 'react'

interface chirpsProps {}
interface chirps {
    id: number,
    username: string,
    message: string
}

const Home: React.FC<chirpsProps> = (props) => {

    const [chirps, setChirps] = useState<chirps[]>([])

    const getChirps = async () => {
        let r = await fetch('/api/chirps')
        let chirp = await r.json()
        setChirps(chirp)
    }

    useEffect(() => { getChirps(); }, [])

    return (
        <div>
            <h1>Home Page</h1>
            {console.log(chirps)}
            <ul>
                {chirps.map(chirp => (
                    <li key={chirp.id}>
                        <h2>{chirp.username}</h2>
                        <p>{chirp.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home