import React, {Component} from 'react';
import OverviewComponent from '../components/overview';
import {getDirectSubordinates, getNonDirectSubordinates} from '../api'
const Loader = () => <div className="empNamesDiv">Loading...</div>;
class OverviewPage extends Component {

    constructor(props){
        super(props);
        const {match} = this.props;
        this.state = {employeeSubordinates:[], loaderFlag:true, empName:match.params.userName, designation:""};
    }
    getData = ()=>{
        const {empName} = this.state;
        Promise.all([getDirectSubordinates(empName), getNonDirectSubordinates(empName)]).then((results)=>{
            let designation = "";
            let directSub = [];
            let nonDirectSub = [];
            if(results[0]){
                designation = results[0].data[0];
                directSub = (results[0].data[1]) ? results[0].data[1]['direct-subordinates'] : [];
            }
            if(results[1]){
                nonDirectSub = (results[1].data[1]) ? results[1].data[1]['direct-subordinates'] : [];
            }
            let emplData = [...new Set([...directSub, ...nonDirectSub])];
            this.setState({employeeSubordinates:emplData, designation:designation, loaderFlag:false});
        }).catch(()=>{
            alert("Oops!.. Something went wrong, please try again");
            this.props.history.push("/");
        })
    }
    componentDidMount(){
        this.getData();
    }
    rediredtToHomepage = ()=>{
        this.props.history.push("/");
    }
    render(){
        const {loaderFlag, empName, designation, employeeSubordinates} = this.state;
        return(
            <div className="overviewContainer">
                <h2>Employee Overview</h2>
                {(loaderFlag === true) ? <Loader /> : <OverviewComponent empname={empName} designation={designation} empsubordinates={employeeSubordinates}/>}
                <p className="backButtonDiv"><button className="btn btn-elegant btn-unique btn-rounded btn-md my-0" onClick={this.rediredtToHomepage} type="button">Go to Home page</button> </p>
            </div>
        );
    }


}

export default OverviewPage;