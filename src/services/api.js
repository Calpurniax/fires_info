import axios from "axios"


const thisYear = new Date().getFullYear()
const twoYearsAgo = (thisYear - 2)

const allRegions = `https://analisis.datosabiertos.jcyl.es//api/explore/v2.1/catalog/datasets/incendios-forestales/records?order_by=fecha_inicio%20DESC&limit=100&where=fecha_inicio%20IN%20%5Bdate%27${twoYearsAgo}%27..date%27${thisYear}%27%5D%20and%20provincia%3D%22BURGOS%22%20OR%20provincia%3D%22LE%C3%93N%22%20OR%20provincia%3D%22PALENCIA%22OR%20provincia%3D%22SALAMANCA%22OR%20provincia%3D%22SEGOVIA%22OR%20provincia%3D%22SORIA%22OR%20provincia%3D%22VALLADOLID%22OR%20provincia%3D%22ZAMORA%22OR%20provincia%3D%22%C3%81VILA%22`



export const CallToApi = async (obj) => {
    const filters =obj.queryKey.pop()
    console.log(filters)
    console.log(filters.situation)
    const oneRegion = `https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/incendios-forestales/records?where=fecha_inicio%20IN%20%5Bdate%272021%27..date%272023%27%5D%20and%20provincia%3D%27${filters.region}%27&order_by=fecha_inicio%20desc&limit=100&offset=0&timezone=UTC&include_links=false&include_app_metas=false`
       

    if (filters.region != 'all' && filters.situation === 'all' && filters.cause ==='all') {        
        try {
            const response = await axios.get(oneRegion)
            return response
        }
        catch (error) {
            console.log(error)
        }
    }
     else if(filters.region != 'all' && filters.situation != 'all' && filters.cause ==='all'){        
        const sitURL = `https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/incendios-forestales/records?where=fecha_inicio%20IN%20%5Bdate%272021%27..date%272023%27%5D%20and%20situacion_actual%3D%27${filters.situation}%27%20and%20provincia%3A%27${filters.region}%27&order_by=fecha_inicio%20desc&limit=100&offset=0&timezone=UTC&include_links=false&include_app_metas=false`
        try {
            const response = await axios.get(sitURL)
            return response
        }
        catch (error) {
            console.log(error)
        }
    }
    else if(filters.region != 'all' && filters.situation != 'all' && filters.cause !='all'){
        const causeURL =`https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/incendios-forestales/records?where=fecha_inicio%20IN%20%5Bdate%272021%27..date%272023%27%5D%20and%20situacion_actual%3D%27${filters.situation}%27%20and%20provincia%3A%27${filters.region}%27%20and%20causa_probable%3D%27${filters.cause}%27&order_by=fecha_inicio%20desc&limit=100&offset=0&timezone=UTC&include_links=false&include_app_metas=false`
        try {
            const response = await axios.get(causeURL)
            return response
        }
        catch (error) {
            console.log(error)
        }
    }
    else {
        
        try {
            const response = await axios.get(allRegions)
            return response
        }
        catch (error) {
            console.log(error)
        }
    }    

}
