const Table = ({ data }) => {
  
  const renderData = () => {
  
    if (data) {      
      return data.map((each) => (
        <tr key={each.index}>
          <td>
            {each.fecha_inicio} / 
            {each.hora_ini}
          </td>
          <td>
            {each.fecha_extinguido} / 
            {each.hora_extinguido}
          </td>
          <td>{each.nivel}</td>
          <td>{each.nivel_maximo_alcanzado}</td>
          <td>
            {each.provincia.map((eachRegion, index) => {
              return <span key={index}> {eachRegion}</span>;
            })}
          </td>
          <td>{each.situacion_actual}</td>
          <td>{each.causa_probable}</td>
          <td>{each.medios_de_extincion}</td>
          <td>{each.fecha_del_parte} / {each.hora_del_parte}</td>
          <td>{each.tipo_y_has_de_superficie_afectada}</td>
          <td>{each.termino_municipal}{each.codigo_municipio_ine}</td>         
        </tr>
      ));      
    }
  };

  return (
    <table className='table'>
      {/* <!-- Fila de cabecera --> */}
      <thead>
        <tr>
          <th>Fecha y hora del inicio</th>
          <th>Fecha y hora extinguido</th>
          <th>Nivel</th>
          <th>Nivel máximo alcanzado</th>
          <th>Provincia(s) afectadas</th>
          <th>Situacion actual</th>
          <th>Causa probable</th>
          <th>Medios de extinción</th>
          <th>Fecha y hora del parte</th>          
          <th>Tipo de superficie y área quemada</th>
          <th>Término municipal y su código INE</th>
        </tr>
      </thead>
      {/* <!-- Cuerpo de la tabla --> */}
      <tbody>{renderData()}</tbody>
    </table>
  );
};

export default Table;
