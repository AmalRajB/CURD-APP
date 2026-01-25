import React from 'react'
import { useEffect, useState } from 'react'
import { display_data } from '../api_endpoints/api'

const home = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const getdata = await display_data()
            setdata(getdata)
        }
        fetchdata();

    }, [])


    return (
        <>

            <table border={2}>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {data.map((val) =>{
                    return <tr key={val.id}>
                    <td>{val.title}</td>
                    <td>{val.discription}</td>
                </tr>
                })}
                
            </table>


        </>
    )
}

export default home