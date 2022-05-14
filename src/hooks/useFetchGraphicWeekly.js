import { useState, useEffect } from 'react'

const useFetchGraphicWeekly = url => {

    const [dataGraphicWeekly, setDataGraphicWeekly] = useState([])

    useEffect(() => {
        const fetchResource = async () => {
            try{
                let res = await fetch(url)
                let data = await res.json()
                setDataGraphicWeekly(data)
            } catch(error){
                console.log(error)
            }
            
        }
        fetchResource()

        var timer = setInterval( () => {
                fetchResource()
            }, 900000);
        localStorage.setItem("timerGraphicWeekly", timer);

    }, [url])


    return { dataGraphicWeekly }

}

export default useFetchGraphicWeekly