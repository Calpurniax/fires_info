import SelectInput from "./SelectInput"

const Filters =({causes})=>{
    const regions =["ÁVILA","BURGOS","LEÓN","PALENCIA","SALAMANCA","SEGOVIA","SORIA","VALLADOLID","ZAMORA"] 
    const situations =["ACTIVO", "CONTROLADO", "EXTINGUIDO"]  

    return  (
        <form>
            <h2>Filtros</h2>
            <label htmlFor="region">Provincia
            <select name="region" id="region">
                <SelectInput array={regions}/>                
            </select>
            </label>
            <label htmlFor="cause">Causa probable
            <select name="cause" id="cause">
                <SelectInput array={causes}/>               
            </select>
            </label>
            <label htmlFor="situation">Situación actual
            <select name="situation" id="situation">
                <SelectInput array={situations}/>                
            </select>
            </label>
            <label htmlFor="max_level">Nivel máximo
            <select name="max_level" id="max_level">          
                <option value="2">2</option>
                <option value="1">1</option>
                <option value="0">0</option>
            </select>
            </label>
        </form>
    )
}

export default Filters