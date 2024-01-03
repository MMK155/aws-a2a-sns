import React from 'react'
import { createPdDriverApi } from '../../store/services/pdDrivers/apiCall';
import { Button } from 'antd'
const DriverForm = () => {
    const handleSubmit = () => {
        const data = {
            id: "1",
            name: "Arnel Jone",
            assigned_zone: "Zone A"
        }
        createPdDriverApi(data);
    }
    return (
        <>
            <Button type="primary" onClick={handleSubmit}>Primary Button</Button>
            <div>DriverForm</div>
        </>
    )
}

export default DriverForm