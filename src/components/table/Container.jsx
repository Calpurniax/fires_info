import { useState } from 'react';
import { callToApi } from '../../services/api';
import { useQuery } from '@tanstack/react-query';
import Table from './Table';
import Filters from './Filters';

const Container = () => {
  const [filters, setFilters] = useState({
    region: 'all',
    cause: 'all',
    situation: 'all',
    max_level: 'all',
  });
  

  //read the data fetched and create an array with the causes
  const createCauses = (causesRaw) => {
    data.data.results.map((each) => {
      causesRaw.push(each.causa_probable);
    });
    const dataFilter = causesRaw.filter((each) => each != null);
    const dataSet = new Set(dataFilter);
    const dataClean = [...dataSet];
    return dataClean;
  };

  //create a query to fetch the initial data
  const { isPending, isError, isSuccess, data, error } = useQuery({
    queryKey: ['fires', filters],
    queryFn: callToApi,
    refetchInterval:1000*60*5
  });
 

  if (isPending) return <span>Cargando datos...</span>;

  if (isError) {
    return <span>Error:{error.message}</span>;
  }

  //handle functions
  const handleFilters=(id, value)=>{    
    setFilters({...filters,[id]:value})
  }

  const renderFilters = () => {
    const causesRaw = [];
    if (isSuccess) {
      const causes = createCauses(causesRaw);
      return <Filters causes={causes} handleFilters={handleFilters} filters={filters}/>;
    }
  };

  
  return (
    <section>
      {renderFilters()}
      <Table data={data.data.results} />      
    </section>
  );
};

export default Container;
