import SelectInput from "./table/SelectInput";

const Nav = ({arrayPages, handlePages, page}) => {       
  
  
  const handleChange=(ev)=>{   
    handlePages(ev.target.id, ev.target.value)
  }
    const renderPages =()=>{               
        return <SelectInput array={arrayPages}/>
    }
  return (
    <nav >
      <button id="first" onClick={handleChange}>Primera página</button>
      <label htmlFor='page' onChange={handleChange}>
        Ir a la página: <select name='page' id='page' value={page}>{renderPages()}</select>
      </label>
      <button id="last" onClick={handleChange}>última página</button>
    </nav>
  );
};
export default Nav;
