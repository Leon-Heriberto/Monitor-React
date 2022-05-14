
import {useState, useEffect} from 'react'

const useFetchTableDashboard  = url => {

    const [tableDash, setTableDash] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setTableDash(data)
                setLoading(false)       
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
        var timer = setInterval(function(){ fetchResource() }, 10000)
        localStorage.setItem("timerTable", timer);
       
    }, [url]);
    return {tableDash, loading, error }

}

export default useFetchTableDashboard
