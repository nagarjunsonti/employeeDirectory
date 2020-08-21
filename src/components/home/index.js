import React, {useState} from 'react';
function SearchComponent(props){
    const [searchValue, setSearchValue] = useState("");
    const handleSearchField = (e)=>{
        let value = e.target.value;
        setSearchValue(value.trim());
    }
    const handleSearchButton = (e)=>{
        e.preventDefault();
        if(searchValue === ""){
            alert("Please enter employee name");
            return;
        }
        props.getEmpolyeeData(searchValue);
    }
    return(
        <div className="searchDiv flexCls">                
            <input className="form-control mr-sm-2" onChange={handleSearchField} type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-elegant btn-unique btn-rounded btn-md my-0" onClick={handleSearchButton} type="button">Search</button>                
        </div>);
}

export default SearchComponent;