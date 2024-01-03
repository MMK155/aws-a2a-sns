import { useEffect, useState } from 'react';
import { getPdDrivers } from '../../store/services/pdDrivers/apiCall'
const DriverList = () => {
    //define state
    const [list, setList] = useState([]);

    //call API 
    const getDrivers = async () => {
        try {
            const response = await getPdDrivers();
            console.log("response---->", response)
            // const { listPdDriversAPI: { items } } = response;
            // setList(items);
        } catch (err) {
            console.log(err);
        }
    }

    //render computers with useEffect
    useEffect(() => {
        getDrivers();
    }, [])

    return (
        <>
            <h1>PD Driver List-------------</h1>
            <div>DriverList</div>
        </>
    )
}

export default DriverList