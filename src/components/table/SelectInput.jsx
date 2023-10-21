const SelectInput =({array})=>{
    
    const renderOptions =()=>{
        if(array.length >0){
            return array.map(each=>{
                return(
                    <option key={each.index}value={each}>{each}</option>
                )
            })
        }
       
}

    return renderOptions()
}

export default SelectInput