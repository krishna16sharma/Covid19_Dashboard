import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Summary from './components/Summary/Summary';
import SReport from './components/SReport/SReport';
import About from './components/About/About';
import './App.css';

const initialState = {
    route: 'summary',
    active: 0,
    deceased: 0,
    cured: 0,
    data: ''
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    componentDidMount(){    //Was in Summary.js before
        fetch('https://api.covid19india.org/state_district_wise.json')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({data: result})
                var actives = 0;
                var deaths = 0;
                var cured = 0;
                console.log(result);
                for(var state in result){
                    var states = result[state]
                    //console.log(states);
                    for(var district in states){
                        var districts = states[district]
                        //console.log(districts);
                        for(var a in districts){
                            //console.log(districts[a]['active']);
                            if(districts[a]['active'] !== undefined){
                            actives+=(districts[a]['active'])
                            }
                            if(districts[a]['deceased'] !== undefined){
                            deaths+=(districts[a]['deceased'])
                            }
                            if(districts[a]['recovered'] !== undefined){
                            cured+=(districts[a]['recovered'])
                            }
                        }
                        //this.setState({active: this.state.active+district.active})
                    }
                }
                //console.log("Active: ",actives);
                this.setState({active: actives});
                this.setState({deceased: deaths});
                this.setState({cured: cured});
                //this.setState({route: 'summary'});
                //console.log("Deceased:",deaths);
                //console.log("Cured:",cured);
            }
        )
        .catch(err => console.log(err));
    }
    onRouteChange = ( route ) => {
        this.setState({route: route});
    }

    render(){
        const {route} = this.state;
        return(
            <div className="App">
                <Navigation onRouteChange={this.onRouteChange}/>
                {
                    (route === 'summary')
                    ?
                        <Summary active={this.state.active} deceased={this.state.deceased} cured={this.state.cured}/>
                    : (route === 'sreport')
                        ?
                        <SReport data={this.state.data}/>
                        :
                        <About/>
                }
            </div>
        );
    }
}

export default App;
