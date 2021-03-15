import * as React from 'react'
import { useState, useEffect } from 'react'

interface Formprops { }

const Form: React.FC<Formprops> = (props) => {
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");

    const handleUser = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUser(e.target.value)
    }
    
    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMessage(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        sendChirp()
    }

    const sendChirp = async () =>{
        let chirp = {
            username: user,
            message: message
        }
        let r = await fetch('/api/chirps',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(chirp)
        })
    }

    return (
        <div>
            <form>
                <input type="text" name="" id="" onChange={handleUser}/>
                <textarea name="" id="" cols="30" rows="10" onChange={handleMessage}></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form