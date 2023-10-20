import { useState, useEffect} from "react"
import { callToApi } from "../../services/api"
import Table from "./Table"
import Filters from "./Filters"
const Container =()=>{
    const [data, setData] = useState()

    useEffect(()=>{
        callToApi().then((response)=>{            
            setData(response.data.results)  
            console.log(data)          
        })
        
    },[])

    return  (
        <section>
            <Table data={data}/>
            <Filters/>
        </section>
    )
}

export default Container