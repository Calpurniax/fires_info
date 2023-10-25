import axios from "axios"

const thisYear = new Date().getFullYear()
const twoYearsAgo = (thisYear - 2)


const baseUrl =`https://analisis.datosabiertos.jcyl.es//api/explore/v2.1/catalog/datasets/incendios-forestales/records`

export const CallToApi = async ({filters, resultsPerPage}) =>{  
    
    const searchParams = new URLSearchParams() 
    const offsetPage = filters.offset     

    searchParams.append("order_by", "fecha_inicio desc")    
    searchParams.append("limit", resultsPerPage)
    searchParams.append("offset", offsetPage)
    searchParams.append("timezone", "UTC")
    searchParams.append("include_links", false)
    searchParams.append("include_app_metas", "false")
    searchParams.append("exclude", "provincia: ORENSE CANTABRIA")
    searchParams.append("where", `fecha_inicio IN [date'${twoYearsAgo}'..date'${thisYear}']`)  
    if(filters){
       
        if(filters.cause != 'all'){
            searchParams.append("where",`causa_probable:'${filters.cause}'`)
        }
        if(filters.max_level != 'all'){
            searchParams.append("where",`nivel_maximo_alcanzado:'${filters.max_level}'`)
        }  
        if(filters.region != 'all'){
            searchParams.append("refine", `provincia:'${filters.region}'`)
        } 
        if(filters.situation != 'all'){
            searchParams.append("refine",`situacion_actual:'${filters.situation}'`)
        }         
    }    
    const url =baseUrl +'?'+ searchParams.toString()
    try{        
        const response =await axios.get(url)
        console.log(response)
        return response.data
    } catch(error){
        console.log(error)
    }
}