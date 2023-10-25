import { useState, useEffect } from 'react';
import { CallToApi } from '../../services/api';
import { useQuery } from '@tanstack/react-query';
import Table from './Table';
import Filters from './Filters';
import Nav from '../Nav'

const Container = () => {
  const [page, setPage] = useState(1)
  const resultsPerPage = 30 
  
  const [filters, setFilters] = useState({
    region: 'all',
    cause: 'all',
    situation: 'all',
    max_level: 'all',    
    offset:0,    
  });
  const maxResultsFromApi =()=>{
    if(data.total_count<9999){
      return data.total_count
    }else return 9999
  }
  useEffect(()=>{
    setFilters({...filters, offset:(page-1)*resultsPerPage})
  },[page])

  //read the data fetched and create an array with the causes
  const createCauses = (causesRaw) => {
    data.results.map((each) => {
      causesRaw.push(each.causa_probable);
    });
    const dataFilter = causesRaw.filter((each) => each != null);
    const dataSet = new Set(dataFilter);
    const dataClean = [...dataSet];
    return dataClean;
  };

  //create a query to fetch the data
  const { isPending, isError, isSuccess, data, error } = useQuery({
    queryKey: ['fires', { filters }],
    queryFn: () => CallToApi({filters, resultsPerPage}),
    refetchInterval: 1000 * 60 * 5,
  });

  if (isPending) return <span>Cargando datos...</span>;
  

  if (isError) {
    return <span>Error:{error.message}</span>;
  }
  

  //handle functions
  const handlePages =(id, value, lastPage)=>{   
    if(id==='first') setPage(1)
    else if(id==='last') setPage(lastPage)
    else setPage(parseInt(value))
  }
  
  const handleFilters = (id, value) => {
    setFilters({ ...filters, [id]: value });
  };

  const renderFilters = () => {
    const causesRaw = [];
    if (isSuccess) {
      const causes = createCauses(causesRaw);
      const results= maxResultsFromApi()
      console.log(results)
      return (
        <Filters
          causes={causes}
          handleFilters={handleFilters}
          filters={filters}
        />
      );
    }
  };

  return (
    <>
      <Nav resultsPerPage={resultsPerPage} handlePages={handlePages} page={page} data={data}/>
      <section>
        {renderFilters()}
        {data.results.length>0?<Table data={data.results} />:
        <span>No hay datos para mostrar</span>}
        
      </section>
    </>
  );
};

export default Container;
