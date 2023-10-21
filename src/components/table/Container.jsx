import { callToApi } from '../../services/api';
import { useQuery } from '@tanstack/react-query';
import Table from './Table';
import Filters from './Filters';

const Container = () => {

  const { isPending, isError, isSuccess, data, error } = useQuery({
    queryKey: ['fires'],
    queryFn: callToApi,
  });

  if (isPending) return <span>Cargando datos...</span>;

  if (isError) {
    return <span>Error:{error.message}</span>;
  }
  const createCauses = (causesRaw) => {
    data.data.results.map((each) => {
        causesRaw.push(each.causa_probable);
    });
    const dataFilter = causesRaw.filter((each) => each != null);
    const dataSet = new Set(dataFilter);
    const dataClean = [...dataSet];
    return dataClean;
  };
  const renderFilters = () => {
    const causesRaw = []    
    if (isSuccess) {
      const causes = createCauses(causesRaw)      
      return <Filters causes={causes} />
    }
  };

  console.log(data);
  return (
    <section>
      <Table data={data.data.results} />
      {renderFilters()}
    </section>
  );
};

export default Container;