import "../styles/components/nav.scss"
import SelectInput from "./table/SelectInput";

const Nav = ({ handlePages, resultsPerPage, data, page}) => { 
 
  const results = data.total_count    
  const lastIndexInApi = results -resultsPerPage
  const numberOfPages = Math.floor(lastIndexInApi/resultsPerPage)  
  const arrayPages =Array.from({length: numberOfPages}, (_, i)=>i+1)

  
  const handleChange=(ev)=>{   
    handlePages(ev.target.id, ev.target.value, numberOfPages)
  }
    const renderPages =()=>{               
        return <SelectInput array={arrayPages}/>
    }
  return (
    <nav className="nav">
      <button className="nav__button" id="first" onClick={handleChange}>Primera página</button>
      <label htmlFor='page'>
        Ir a la página: <select name='page' id='page' value={page} onChange={handleChange}>{renderPages()}</select>
      </label>
      <button className="nav__button" id="last" onClick={handleChange}>Última página</button>
    </nav>
  );
};
export default Nav;
