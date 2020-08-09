import React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faViruses,faClipboard,faListAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component{
    constructor(props){
        super(props);
    }
    onRouteChange = ( route ) =>{
        this.props.onRouteChange(route);
    }
    listFunction = ()=> {
      var x = document.getElementById("myTopnav");
      console.log(x);
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    render(){
        return(
            <div className="topnav" id="myTopnav">
                <p id="title" style={{margin: '0px', padding:'32px', background:'#9b2300', color: '#f2f2f2'}}> <FontAwesomeIcon icon={faViruses}/> COVID-19 Dashboard</p>
                <div className="Sections">
                    <p onClick = {() => this.onRouteChange('summary')}> <FontAwesomeIcon icon={faListAlt}/> Summary</p>
                    <p onClick = {() => this.onRouteChange('sreport')}> <FontAwesomeIcon icon={faClipboard}/> Statewise Report</p>
                    <p onClick = {() => this.onRouteChange('about')}> <FontAwesomeIcon icon={faInfoCircle}/> About</p>
                </div><p className="icon" onClick={this.listFunction}>
                    <FontAwesomeIcon icon={faBars} />
                </p>
            </div>
        );
    }
}
export default Navigation;
