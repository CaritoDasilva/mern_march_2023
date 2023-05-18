import { getAllResources } from "../services/getswapi-service"
import { useEffect, useState } from "react"

export const Home = () => {
    const [resources, setResources] = useState([])

    const getSwapi = async () => {
        try {
            const swapiData = await getAllResources()
            console.log("copydata", swapiData)
            setResources(Object.keys(swapiData.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSwapi()
    }, [])

    return (
        <div>
            <form action="">
                <select name="" id="">
                    {resources.length > 0 && resources.map((value, index) => (
                        <option key={index} value={value}>{value}</option>
                    )
                    )}
                </select>
            </form>
        </div>
    )
}
