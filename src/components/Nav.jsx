import SelectInput from "./table/SelectInput";

const Nav = ({data, handlePages}) => {
  const numberOfPages = Math.ceil(data.total_count/10)        
  const arrayPages = Array.from({length:numberOfPages},(_, i)=> i+1)
  
  const handleChange=(ev)=>{   
    handlePages(ev.target.id, ev.target.value,numberOfPages)
  }
    const renderPages =()=>{               
        return <SelectInput array={arrayPages}/>
    }
  return (
    <nav >
      <button id="first" onClick={handleChange}>Primera página</button>
      <label htmlFor='page' onChange={handleChange}>
        Ir a la página: <select name='page' id='page'>{renderPages()}</select>
      </label>
      <button id="last" onClick={handleChange}>última página</button>
    </nav>
  );
};
export default Nav;
