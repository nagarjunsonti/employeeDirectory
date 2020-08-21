import React from 'react';
function OverviewComponent(props){
    const getnames = ()=>{
        let names = <div key="name" className="emptyDataDiv">Data is not avialabe for searched Employee</div>;
        if(props.designation){
            names = <div key="name" className="emptyDataDiv">{`${props.empname}, don't have any Subordinates`}</div>;
        }
        if(props.empsubordinates.length > 0){
            names = props.empsubordinates.map((name)=>{
                return <div key="name" className="empNamesDiv">{name}</div>;
            });
        }
        return names;
    }
    let designation = (props.designation !== "" && props.designation !== "employee") ? `(${props.designation})` : "";
    return(<div>
        <h3>Subordinates of employee {props.empname} {designation}:</h3>
        <div className="namesdiv">{getnames()}</div>
    </div>);
}

export  default OverviewComponent;
