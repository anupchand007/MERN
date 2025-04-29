// Custom Hook

import { useEffect, useState } from "react";

function useCurrenryInfo(currency){
    
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((rate) => setData(rate[currency]))
        console.log(data);
        
    }, [currency])
    
    console.log(data);
    return data
}

export default useCurrenryInfo;