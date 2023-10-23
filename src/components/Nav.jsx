import SelectInput from "./table/SelectInput";

const Nav = ({data}) => {
    const renderPages =()=>{
        const numberOfPages = Math.ceil(data.total_count/10)
        console.log(numberOfPages)
        const arrayPages = Array.from({length:numberOfPages},(_, i)=> i+1)        
        return <SelectInput array={arrayPages}/>
    }
  return (
    <nav>
      <button>Primera página</button>
      <label htmlFor='page'>
        Ir a la página: <select name='page' id='page'>{renderPages()}</select>
      </label>
      <button>última página</button>
    </nav>
  );
};
export default Nav;
