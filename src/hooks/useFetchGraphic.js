import {useState, useEffect} from 'react'

const useFetchGraphic = url => {

    const [data, setData] = useState([])

    useEffect( () => {

        const fetchIndicatorsCount = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
            } catch (error){
                console.log(error)
            }
        }
        fetchIndicatorsCount()
        var timer = setInterval(function(){ fetchIndicatorsCount() }, 120000)
        localStorage.setItem("timerGraphic", timer);
    
    }, [url])

    return { data } 

}

export default useFetchGraphic