import { useState, useEffect } from 'react'


const useFetchIndicatorsCounter = url => {

    const [indicatorsCount, setIndicatorsCount] = useState([])

    useEffect( () => {
        const fetchIndicatorsCount = async () => {
            try {
                let res = await fetch(url,)
                let data = await res.json()
                setIndicatorsCount(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchIndicatorsCount()
        // TODO: Save timer id
        var timer = setInterval(function(){ fetchIndicatorsCount() }, 10000)
        localStorage.setItem("timerIndicators", timer)
    }, [url])
    return {indicatorsCount}
}

export default useFetchIndicatorsCounter