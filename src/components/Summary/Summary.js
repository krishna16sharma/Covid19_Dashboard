import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones, faExclamationCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import './Summary.css'

class Summary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active: this.props.active,
            deceased: this.props.deceased,
            cured: this.props.cured
        }
    }
    //Since the props will change after API fetch, Summary component must re-render to reflect changes
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps !== prevState){
            return nextProps;
            //Same as return {active : nextProps.active, deceased: nextProps.deceased, cured: nextProps.cured};
        }
        else return null;//Don't re-render if there is no change.
    }
    render(){
        return(
            <div>
                <h1>Summary</h1>
                <hr/>
                <p style={{textAlign:"left", paddingLeft:"5px"}}>This is the cumulative summary of cases in India as of present.</p>
                <div style={{textAlign:"center"}}>
                <h2 style={{color:"#f7c500"}} className="infocard"><p style={{margin: "2px", fontSize:"1.5em"}}><FontAwesomeIcon icon={faExclamationCircle}/></p> Active Cases : {this.state.active}</h2>
                <h2 style={{color:"#f70700"}} className="infocard"><p style={{margin: "2px", fontSize:"1.5em"}}><FontAwesomeIcon icon={faSkullCrossbones}/></p> Deceased : {this.state.deceased}</h2>
                <h2 style ={{color:"#009e7f"}} className="infocard"><p style={{margin: "2px", fontSize:"1.5em"}}><FontAwesomeIcon icon={faPlusCircle}/></p> Cured : {this.state.cured}</h2>
                </div>
            </div>
        )
    }
}

export default Summary;
