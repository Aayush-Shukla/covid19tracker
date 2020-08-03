import React, {Component} from 'react';



class Table extends Component {



    render() {
        // let conf = 0;
        // this.props.state.districtData.map((num) => conf+=num.confirmed);
        // // console.log(xinfo)



        return (



                <tr>
                    <td className="stname">
                        {this.props.state.state}
                    </td>
                    <td className="stname"><small className="blue-text">{this.props.state.deltaconfirmed>0 &&<strong><span className="material-icons md-12 arrows">arrow_drop_up</span> {this.props.state.deltaconfirmed}</strong>}</small><span className="oka"> {this.props.state.confirmed}</span></td>
                    <td className="stname">{this.props.state.active}</td>
                    <td className="stname"><small className="green-text">{this.props.state.deltarecovered>0 &&<strong><text className="material-icons md-12 arrows">arrow_drop_up</text> {this.props.state.deltarecovered}</strong>}</small><text className="oka"> {this.props.state.recovered}</text></td>
                    <td className="stname"><small className="red-text">{this.props.state.deltadeaths>0 &&<strong><text className="material-icons md-12 arrows">arrow_drop_up</text> {this.props.state.deltadeaths}</strong>}</small><text className="oka"> {this.props.state.deaths}</text>




                        </td>


                </tr>






    );
    }
}

export default Table;
