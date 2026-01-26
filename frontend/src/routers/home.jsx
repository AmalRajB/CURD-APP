import React from 'react'
import { useEffect, useState } from 'react'
import { display_data, logout } from '../api_endpoints/api'
import { useNavigate } from "react-router-dom";

const home = () => {
    const [data, setdata] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        const fetchdata = async () => {
            const getdata = await display_data()
            setdata(getdata)
        }
        fetchdata();

    }, [])

    const handlelogout = async () => {
        const result = await logout()
        if (result) {
            navigate('/')
            return true
        }
    }


    return (
        <>

            <table border={2}>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {data.map((val) => {
                    return <tr key={val.id}>
                        <td>{val.title}</td>
                        <td>{val.discription}</td>
                    </tr>
                })}

            </table>

            <button onClick={handlelogout} >logout</button>


        </>
    )
}

export default home