import axios from "axios"
import { useEffect, useState } from "react"


const useProduct = ()=>{
    const[products, setProducts]=useState([])
    const [loading, setLoading]=useState(false)
    const[error,setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
       axios('./funitureData.json')
       .then(data=>setProducts(data.data))
       .catch(err=>setError(err))
       .finally(()=> setLoading(false))
       
    },[])


    return {products,loading,error}
}

export default useProduct