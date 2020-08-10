import React from 'react';
import './SReport.css'

class SReport extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sName: '',
            places: this.props.data
        }
    }
    getInfo = (place) =>{

        var table = document.getElementById("statTable");
        try{
            var d_active = 0;
            var d_deceased = 0;
            var d_recovered = 0;
            console.log(place[this.state.sName]['districtData']);
            for(var district in place[this.state.sName]['districtData']){
                var row = table.insertRow(-1);

                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);

                cell1.innerHTML = district;
                cell2.innerHTML = place[this.state.sName]['districtData'][district]['active'];
                cell3.innerHTML = place[this.state.sName]['districtData'][district]['deceased'];
                cell4.innerHTML = place[this.state.sName]['districtData'][district]['recovered'];

                d_active +=  place[this.state.sName]['districtData'][district]['active'];
                d_deceased += place[this.state.sName]['districtData'][district]['deceased'];
                d_recovered += place[this.state.sName]['districtData'][district]['recovered'];
            }
            var lrow = table.insertRow(-1);
            var lcell1 = lrow.insertCell(0);
            var lcell2 = lrow.insertCell(1);
            var lcell3 = lrow.insertCell(2);
            var lcell4 = lrow.insertCell(3);

            lcell1.innerHTML = 'Total';
            lcell2.innerHTML = d_active;
            lcell3.innerHTML = d_deceased;
            lcell4.innerHTML = d_recovered;

            lcell1.className = 'red_cell';
        }
        catch(err){
            window.alert("Invalid Input");
        }
    }
    getPlace = () =>{
        var l = document.getElementById('StatesDL');
        var p = document.getElementById('placename');
        p.style.visibility = 'visible';
        //console.log(l.value);
        var table = document.getElementById("statTable");
        table.style.visibility = 'visible';
        var rows = table.rows.length;
        console.log(rows);
        while(rows>1){
            table.deleteRow(-1);
            rows-=1;
        }
        this.setState(
            {sName: l.value},
            () =>{
                this.getInfo(this.state.places);
                l.value = '';
            }
        );
        //console.log(this.state.places);

    }
    render(){
        return(
            <div>
                <h1>Statewise Report</h1>
                <hr/>
                <p>Select your State or Union Territory from the dropdown list.</p>
                <form>
                  <input list="States" name="state" id="StatesDL" placeholder="Choose a State or UT"/>
                  <datalist id="States">
                    <option value="Andaman and Nicobar Islands"/>
                    <option value="Andhra Pradesh"/>
                    <option value="Arunachal Pradesh"/>
                    <option value="Assam"/>
                    <option value="Bihar"/>
                    <option value="Chandigarh"/>
                    <option value="Chhattisgarh"/>
                    <option value="Dadra and Nagar Haveli and Daman and Diu"/>
                    <option value="Delhi"/>
                    <option value="Goa"/>
                    <option value="Gujarat"/>
                    <option value="Haryana"/>
                    <option value="Himachal Pradesh"/>
                    <option value="Jammu and Kashmir"/>
                    <option value="Jharkhand"/>
                    <option value="Karnataka"/>
                    <option value="Kerala"/>
                    <option value="Ladakh"/>
                    <option value="Lakshadweep"/>
                    <option value="Madhya Pradesh"/>
                    <option value="Maharashtra"/>
                    <option value="Manipur"/>
                    <option value="Meghalaya"/>
                    <option value="Mizoram"/>
                    <option value="Nagaland"/>
                    <option value="Odisha"/>
                    <option value="Puducherry"/>
                    <option value="Punjab"/>
                    <option value="Rajasthan"/>
                    <option value="Sikkim"/>
                    <option value="Tamil Nadu"/>
                    <option value="Telangana"/>
                    <option value="Tripura"/>
                    <option value="Uttar Pradesh"/>
                    <option value="Uttarakhand"/>
                    <option value="West Bengal"/>
                  </datalist>
                </form>
                <button onClick={this.getPlace} id="SReportButton">Submit</button>
                <p id="placename" style={{visibility:'hidden'}}> The statistics for {this.state.sName} (as of present) is shown below.</p>
                <table style={{visibility:'hidden'}} id="statTable">
                    <thead>
                        <tr>
                            <th>District</th>
                            <th>Active cases</th>
                            <th>Deceased</th>
                            <th>Recovered</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default SReport;
