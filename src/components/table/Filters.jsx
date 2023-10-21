import SelectInput from "./SelectInput"

const Filters =({causes, handleFilters, filters})=>{
    const regions =["ÁVILA","BURGOS","LEÓN","PALENCIA","SALAMANCA","SEGOVIA","SORIA","VALLADOLID","ZAMORA"] 
    const situations =["ACTIVO", "CONTROLADO", "EXTINGUIDO"] 
    // const handleClick=()=>{
    //     handleSubmit()
    // } 
    const handleChange =(ev)=>{
        handleFilters(ev.target.id, ev.target.value)
    }
    return  (
        <form>
            <h2>Filtros</h2>
            <label htmlFor="region">Provincia
            <select name="region" id="region" value={filters.region} onChange={handleChange}>
                <option value='all'></option>
                <SelectInput array={regions}/>                
            </select>
            </label>
            <label htmlFor="cause">Causa probable
            <select name="cause" id="cause" value={filters.cause} onChange={handleChange}>
                <option value='all'></option>
                <SelectInput array={causes}/>               
            </select>
            </label>
            <label htmlFor="situation">Situación actual
            <select name="situation" id="situation" value={filters.situation} onChange={handleChange}>
                <option value='all'></option>
                <SelectInput array={situations}/>                
            </select>
            </label>
            <label htmlFor="max_level">Nivel máximo
            <select name="max_level" id="max_level" value={filters.max_level} onChange={handleChange}> 
                <option value='all'></option>         
                <option value="2">2</option>
                <option value="1">1</option>
                <option value="0">0</option>
            </select>
            </label>
            {/* <button onClick={handleClick}>Enviar consulta</button> */}
        </form>
    )
}

export default Filters