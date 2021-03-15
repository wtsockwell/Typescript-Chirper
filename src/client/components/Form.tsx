import * as React from 'react'
import { useState, useEffect } from 'react'

interface Formprops {
    history
 }

const Form: React.FC<Formprops> = ({history}) => {
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");

    const handleUser = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUser(e.target.value)
    }
    
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setMessage(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        sendChirp()
        document.getElementById('username').value=""
        document.getElementById('message').value=""
    }

    const handleReturn = (e) =>{
        e.preventDefault()
        history.goBack()
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
                <input type="text" name="" id="username" onChange={handleUser} value={user}/>
                <textarea name="" id="message" cols={30} rows={10} onChange={handleMessage} value={message}></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={handleReturn}>Go back</button>
        </div>
    )
}

export default Form