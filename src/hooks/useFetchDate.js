import { useState, useEffect } from 'react'

const useFetchDate = url => {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
                setLoading(false)       
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
        var timer = setInterval(function(){ fetchResource() }, 43200000);
        localStorage.setItem("timerDate", timer);
    }, [url]);
    return { data, loading, error }
}

export default useFetchDate