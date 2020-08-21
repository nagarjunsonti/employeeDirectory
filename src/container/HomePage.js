import React, {Component} from 'react';
import  SearchComponent from '../components/home';
import { withRouter } from 'react-router-dom';
class HomePage extends Component {

    
    getEmpolyeeData =(serachString)=>{
        console.log(this.props.history);
        const location = `/overview/${serachString}`;
        this.props.history.push(location);
    } 
    render(){
        return(
          <div className="homePageContainer"> 
            <h2 >Employee Explorer</h2>
            <SearchComponent getEmpolyeeData={this.getEmpolyeeData}/>
          </div>);
    }


}

export default withRouter(HomePage);