import axios from "axios"

const thisYear = new Date().getFullYear()
const twoYearsAgo = (thisYear - 2)

const baseUrl =`https://analisis.datosabiertos.jcyl.es//api/explore/v2.1/catalog/datasets/incendios-forestales/records`

export const CallToApi = async () =>{    
    const searchParams = new URLSearchParams()
    //const filters = obj.queryKey[1]
    searchParams.append("order_by", "fecha_inicio desc")    
    searchParams.append("limit", 100)
    searchParams.append("offset", 0)
    searchParams.append("timezone", "UTC")
    searchParams.append("include_links", false)
    searchParams.append("include_app_metas", "false")
    searchParams.append("exclude", "provincia: ORENSE CANTABRIA")
    searchParams.append("where", `fecha_inicio IN [date'${twoYearsAgo}'..date'${thisYear}']`)   
    
    const url =baseUrl +'?'+ searchParams.toString()
    try{        
        const response =await axios.get(url)
        return response
    } catch(error){
        console.log(error)
    }
}