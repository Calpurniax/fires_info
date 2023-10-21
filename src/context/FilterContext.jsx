import { createContext, useContext, useState } from 'react';

export const FilterContext =createContext()

export const useFilterContext =()=>{
    const context = useContext(FilterContext)
    if(!context) throw new Error ('Error interno - falta contexto')
    return context
}

export const FilterProvider =({children})=>{
    const [filters, setFilters] = useState({
        region: 'all',
        cause: 'all',
        situation: 'all',
        max_level: 'all',
      });

      return (
        <FilterContext.Provider value={{filters,setFilters }}>
            {children}
        </FilterContext.Provider>
      )
}