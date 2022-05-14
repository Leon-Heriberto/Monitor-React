import { useState, useEffect } from 'react'

const useFetchServiceAPIOnline = url => {
    const [status, setstatus] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let status = await res.json()
                setstatus(status)
                setLoading(false)       
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
        var timer = setInterval(function(){ fetchResource() }, 60000);
    
        localStorage.setItem("timerServices", timer)
    }, [url]);
    return { status, loading, error }
}

export default useFetchServiceAPIOnline