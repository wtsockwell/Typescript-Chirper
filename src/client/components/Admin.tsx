import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

export interface DetailsProps extends RouteComponentProps<{ id: string; }> { }

const Admin = ({ match: { params: { id } } }) => {

    const [user, setUser] = useState()
    const [message, setMessage] = useState()

    const getChirps = async () => {
        let r = await fetch(`/api/chirps`)
        let chirp = await r.json()
        setUser(chirp[id].username)
        setMessage(chirp[id].message)
    }

    useEffect(()=>{getChirps()},[])

    const handleUser = (e) => {
        setUser(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        updateChirp()
    }
    const handleDelete = (e) => {
        e.preventDefault()
        deleteChirp()
    }

    const updateChirp = () =>{
        let chirp = {
            username: user,
            message: message
        }
        let r = fetch(`/api/chirps/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(chirp)
        })
    }

    const deleteChirp = () =>{
        let r = fetch(`/api/chirps/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div>
            <form>
                <input type="text" name="" id="user" value={user} onChange={handleUser}/>
                <textarea name="" id="message" cols="30" rows="10" value={message} onChange={handleMessage}></textarea>
            </form>
            <button onClick={handleEdit}>Save</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Admin