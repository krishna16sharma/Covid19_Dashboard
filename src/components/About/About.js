import React from 'react';

class About extends React.Component{
    render(){
        return(
            <div>
            <h1>About</h1>
            <hr/>
            <h3 style={{textAlign:"left", paddingLeft:"5px"}}>Source</h3>
            <p style={{textAlign:"left", paddingLeft:"5px", height:"60vh"}}>
                The data on this dashboard is obtained from COVID19-India API
                maintained by COVID-19 India Org Data Operations Group.
                 It is a volunteer-driven, crowd-sourced database for COVID-19
                  stats & patient tracing in India.<br/>
                  The data is updated frequently based on state press bulletins,
                  official handles, Press Trust of India, ANI reports. Thus,
                  the data displayed here is generally the latest.</p>
              <hr/>
            <footer style={{fontSize: '0.75rem'}}>This website was built by Krishna Sharma S, 2020</footer>
            </div>
        );
    }
}

export default About;
