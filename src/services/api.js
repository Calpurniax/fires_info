import axios from "axios"

let yearConsulted = new Date().getFullYear()
// yearConsulted = (yearConsulted - 2)
// console.log(yearConsulted)

const url = `https://analisis.datosabiertos.jcyl.es//api/explore/v2.1/catalog/datasets/incendios-forestales/records?order_by=fecha_inicio%20DESC&limit=100&where=fecha_inicio%3E${yearConsulted}%20AND%20provincia%3D%22BURGOS%22%20OR%20provincia%3D%22LE%C3%93N%22%20OR%20provincia%3D%22PALENCIA%22OR%20provincia%3D%22SALAMANCA%22OR%20provincia%3D%22SEGOVIA%22OR%20provincia%3D%22SORIA%22OR%20provincia%3D%22VALLADOLID%22OR%20provincia%3D%22ZAMORA%22OR%20provincia%3D%22%C3%81VILA%22` 

export const callToApi = async ()=> {
    try{
        const response = await axios.get(url)
        return response
    }
    catch(error){
        console.log(error)
    }
}
